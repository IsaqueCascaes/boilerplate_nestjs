import { Entity } from 'src/domain/core/entity';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';

interface ResponsibleProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

export class ResponsibleEntity extends Entity<ResponsibleProps> {
  get name() {
    return this.props.name;
  }
  set name(value: string) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }
  set email(value: string) {
    this.props.email = value;
  }

  get phone() {
    return this.props.phone;
  }
  set phone(value: string) {
    this.props.phone = value;
  }

  get cpf() {
    return this.props.cpf;
  }
  set cpf(value: string) {
    this.props.cpf = value;
  }

  static create(
    props: ResponsibleProps,
    id?: UniqueEntityID,
  ): ResponsibleEntity {
    return new ResponsibleEntity(props, id);
  }
}
