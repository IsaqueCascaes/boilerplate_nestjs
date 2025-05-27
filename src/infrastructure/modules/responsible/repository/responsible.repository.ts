import { Injectable } from '@nestjs/common';
import { ResponsibleRepository } from 'src/application/repository/responsible/responsible.repository';
import { FindAllResponsibleDto } from 'src/domain/dto/responsible/find-all-responsibles.dto';
import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ResponsibleMapper } from 'src/infrastructure/mappers/responsible/responsible.mapper';

@Injectable()
export class PrismaResponsibleRepository implements ResponsibleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: FindAllResponsibleDto): Promise<ResponsibleEntity[]> {
    const where: Record<string, any> = {};

    if (filters.name) {
      where.name = {
        contains: filters.name,
      };
    }

    if (filters.email) {
      where.email = {
        contains: filters.email,
      };
    }

    if (filters.cpf) {
      where.cpf = {
        contains: filters.cpf,
      };
    }

    const records = await this.prisma.responsible.findMany({ where });

    return records.map((record) => ResponsibleMapper.toDomain(record));
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

  async findByCpf(cpf: string): Promise<ResponsibleEntity | null> {
    const record = await this.prisma.responsible.findUnique({ where: { cpf } });
    return record ? ResponsibleMapper.toDomain(record) : null;
  }

  async findByEmail(email: string): Promise<ResponsibleEntity | null> {
    const record = await this.prisma.responsible.findUnique({
      where: { email },
    });
    return record ? ResponsibleMapper.toDomain(record) : null;
  }
}
