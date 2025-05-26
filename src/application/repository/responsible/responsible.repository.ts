import { ResponsibleEntity } from 'src/domain/entity/responsible/responsible.entity';

export abstract class ResponsibleRepository {
  abstract findAll(): Promise<ResponsibleEntity[]>;
  abstract findById(id: string): Promise<ResponsibleEntity | null>;
  abstract create(responsible: ResponsibleEntity): Promise<void>;
  abstract update(responsible: ResponsibleEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
