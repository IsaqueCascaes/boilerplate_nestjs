import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { ProductRepository } from 'src/application/repository/product/product.repository';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { ProductEntity } from 'src/domain/entity/product/product.entity';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { CreateProductOutputDto } from 'src/infrastructure/modules/product/controller/dto/create-product-output.dto';

@Injectable()
export class CreateProductUseCase {
  private readonly logger = new Logger(CreateProductUseCase.name);

  constructor(
    private readonly productRepository: ProductRepository,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async execute(input: CreateProductDto) {
    this.logger.log(
      `Starting product creation for companyId: ${input.companyId}`,
    );

    const companyExists = await this.companyRepository.findById(
      input.companyId,
    );
    if (!companyExists) {
      this.logger.warn(`Company not found: ${input.companyId}`);
      throw new BadRequestException(
        'The provided companyId does not exist, verify if it is valid or exists .',
      );
    }

    const productAlreadyExists =
      await this.productRepository.existsByNameAndCompanyId(
        input.name,
        input.companyId,
      );

    if (productAlreadyExists) {
      this.logger.warn(`Duplicate product name for company: ${input.name}`);
      throw new BadRequestException(
        'A product with this name already exists for this company.',
      );
    }

    const product = ProductEntity.create({
      name: input.name,
      description: input.description,
      price: input.price,
      companyId: input.companyId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.productRepository.create(product);

    this.logger.log(`Product successfully created: ${product.name}`);
    return CreateProductOutputDto.toDto(product);
  }
}
