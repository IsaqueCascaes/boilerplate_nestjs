import { Injectable } from '@nestjs/common';
import { CompanyRepository } from 'src/application/repository/company/company.repository';
import { CompanyEntity } from 'src/domain/entity/company/company.entity';
import { CompanyMapper } from 'src/infrastructure/mappers/company/company.mapper';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<CompanyEntity[]> {
    const records = await this.prisma.company.findMany();
    return records.map(CompanyMapper.toDomain);
  }

  async findById(id: string): Promise<CompanyEntity | null> {
    const record = await this.prisma.company.findUnique({ where: { id } });
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
      data: CompanyMapper.toPersistence(company),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.company.delete({ where: { id } });
  }
}
