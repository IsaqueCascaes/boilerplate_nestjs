import { Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { CompanyEntity } from 'src/domain/entity/company/company.entity';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { CompanyMapper } from 'src/infrastructure/mappers/company/company.mapper';
import { FindAllCompaniesDto } from 'src/domain/dto/company/find-all-companies.dto';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: FindAllCompaniesDto): Promise<CompanyEntity[]> {
    const where: Record<string, any> = {};

    if (filters.name) {
      where.name = {
        contains: filters.name,
      };
    }

    if (filters.cnpj) {
      where.cnpj = {
        contains: filters.cnpj,
      };
    }

    const records = await this.prisma.company.findMany({
      where,
      include: {
        responsible: true,
      },
    });

    const responsibleName = filters.responsibleName?.toLowerCase();

    const filtered = responsibleName
      ? records.filter((record) => {
          const responsible = record.responsible as { name: string } | null;
          return (
            typeof responsible?.name === 'string' &&
            responsible.name.toLowerCase().includes(responsibleName)
          );
        })
      : records;

    return filtered.map((record) => CompanyMapper.toDomain(record));
  }

  async findById(id: string): Promise<CompanyEntity | null> {
    const record = await this.prisma.company.findUnique({
      where: { id },
      include: { responsible: true },
    });

    return record ? CompanyMapper.toDomain(record) : null;
  }

  async create(company: CompanyEntity): Promise<void> {
    await this.prisma.company.create({
      data: CompanyMapper.toPersistence(company),
    });
  }

  async update(company: CompanyEntity): Promise<void> {
    await this.prisma.company.update({
      where: { id: company.id.toValue() },
      data: {
        name: company.name,
        cnpj: company.cnpj,
      },
    });
  }

  async delete(id: string): Promise<CompanyEntity | null> {
    const record = await this.prisma.company.findUnique({
      where: { id },
      include: { responsible: true },
    });

    if (!record) {
      return null;
    }

    await this.prisma.company.delete({ where: { id } });

    return CompanyMapper.toDomain(record);
  }
}
