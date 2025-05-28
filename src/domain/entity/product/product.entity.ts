import { Entity } from 'src/domain/core/entity';
import { UniqueEntityID } from 'src/domain/core/unique-entity-id';

interface ProductProps {
  name: string;
  description?: string | null;
  price: number;
  companyId: string;
  companyName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ProductEntity extends Entity<ProductProps> {
  get name() {
    return this.props.name;
  }
  set name(value: string) {
    this.props.name = value;
  }

  get description() {
    return this.props.description;
  }
  set description(value: string | null | undefined) {
    this.props.description = value;
  }

  get price() {
    return this.props.price;
  }
  set price(value: number) {
    this.props.price = value;
  }

  get companyId() {
    return this.props.companyId;
  }

  get companyName(): string | undefined {
    return this.props.companyName;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  static create(props: ProductProps, id?: UniqueEntityID): ProductEntity {
    return new ProductEntity(props, id);
  }
}
