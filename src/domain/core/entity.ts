import { UniqueEntityID } from './unique-entity-id';

export abstract class Entity<Props> {
  private readonly _id: UniqueEntityID;
  readonly props: Props;

  get id() {
    return this._id;
  }

  constructor(props: Props, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) {
      return true;
    }

    if (entity.id === this._id) {
      return true;
    }

    return false;
  }
}
