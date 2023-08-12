import { Event } from '@domain/entities/Event';
import {
  DbContextModelBuilder,
  IDbContextOptionsBuilder,
  IDbSet,
  SQLQuerySpecificationEvaluator,
  DbContext,
  DbSetEntity
} from 'slim-ef';
import { Connection } from 'typeorm';

@DependencyInjection.Inject()
export class ApplicationDbContext extends DbContext {
  constructor(connection: Connection) {
    super(connection, SQLQuerySpecificationEvaluator);
  }

  @DbSetEntity(Event)
  public readonly events: IDbSet<Event, Event>;
  protected onModelCreation<BaseType extends object = any>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder: DbContextModelBuilder<BaseType>
  ): void {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onConfiguring(optionsBuilder: IDbContextOptionsBuilder): void {}
}
