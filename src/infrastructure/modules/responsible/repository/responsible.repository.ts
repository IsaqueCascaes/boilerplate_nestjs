import { Injectable } from '@nestjs/common';
import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';
import { ResponsibleMapper } from 'src/infrastructure/mappers/responsible/responsible.mapper';

@Injectable()
export class PrismaResponsibleRepository implements ResponsibleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ResponsibleEntity[]> {
    const records = await this.prisma.responsible.findMany();
    return records.map(ResponsibleMapper.toDomain);
  }

  async findById(id: string): Promise<ResponsibleEntity | null> {
    const record = await this.prisma.responsible.findUnique({ where: { id } });
    return record ? ResponsibleMapper.toDomain(record) : null;
  }

  async create(responsible: ResponsibleEntity): Promise<void> {
    await this.prisma.responsible.create({
      data: ResponsibleMapper.toPersistence(responsible),
    });
  }

  async update(responsible: ResponsibleEntity): Promise<void> {
    await this.prisma.responsible.update({
      where: { id: responsible.id.toValue() },
      data: ResponsibleMapper.toPersistence(responsible),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.responsible.delete({ where: { id } });
  }
}
