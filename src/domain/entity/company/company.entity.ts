import { Entity } from 'src/domain/core/entity';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';

interface CompanyProps {
  name: string;
  cnpj: string;
  responsibleId: string;
  responsibleName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CompanyEntity extends Entity<CompanyProps> {
  get name() {
    return this.props.name;
  }
  set name(value: string) {
    this.props.name = value;
  }

  get cnpj() {
    return this.props.cnpj;
  }
  set cnpj(value: string) {
    this.props.cnpj = value;
  }

  get responsibleId() {
    return this.props.responsibleId;
  }
  set responsibleId(value: string) {
    this.props.responsibleId = value;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  get responsibleName(): string | undefined {
    return this.props.responsibleName;
  }

  static create(props: CompanyProps, id?: UniqueEntityID): CompanyEntity {
    return new CompanyEntity(props, id);
  }
}
