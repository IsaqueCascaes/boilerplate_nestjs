import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { FindAllProductsDto } from 'src/domain/dto/product/find-all-products.dto';
import { ProductEntity } from 'src/domain/entity/product/product.entity';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ProductMapper } from 'src/infrastructure/mappers/product/product.mapper';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany();
    return products.map((product) => ProductMapper.toDomain(product));
  }

  async findById(id: string): Promise<ProductEntity | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return product ? ProductMapper.toDomain(product) : null;
  }

  async create(product: ProductEntity): Promise<void> {
    await this.prisma.product.create({
      data: ProductMapper.toPersistence(product),
    });
  }

  async update(product: ProductEntity): Promise<void> {
    await this.prisma.product.update({
      where: { id: product.id.toValue() },
      data: ProductMapper.toPersistence(product),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }

  async findByNameAndCompanyId(
    name: string,
    companyId: string,
  ): Promise<ProductEntity | null> {
    const product = await this.prisma.product.findFirst({
      where: {
        name,
        companyId,
      },
    });

    return product ? ProductMapper.toDomain(product) : null;
  }

  async findByFilters(filters: FindAllProductsDto): Promise<ProductEntity[]> {
    const where: Prisma.ProductWhereInput = {
      name: filters.name
        ? {
            contains: filters.name,
          }
        : undefined,
      company: filters.companyName
        ? {
            name: {
              contains: filters.companyName,
            },
          }
        : undefined,
    };

    const records = await this.prisma.product.findMany({
      where,
      include: {
        company: true,
      },
    });

    return records.map((record) => ProductMapper.toDomain(record));
  }
}
