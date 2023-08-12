import {
  GetEventsQueryHandler,
  IGetEventsQueryHandler
} from '@business/events/get-events/get-events.query.handler';
import { IEventRepository } from '@domain/repo/i.event.repository';
import { EventRepository } from './data/event.repository';
import { GetEventsQuery } from '@business/events/get-events/get-events.query';
import { ApplicationDbContext } from './data/application-db.context';
import {
  AddEventCommandHandler,
  IAddEventCommandHandler
} from '@business/events/add-event/add-event.command.handler';

export const GetEventsQueryHandlerProvider = {
  provide: IGetEventsQueryHandler,
  useClass: GetEventsQueryHandler
};
export const AddEventCommandHandlerProvider = {
  provide: IAddEventCommandHandler,
  useClass: AddEventCommandHandler
};
export const EventRepositoryProvider = {
  provide: IEventRepository,
  useClass: EventRepository
};

export const ApplicationDbContextProvider = {
  provide: ApplicationDbContext,
  useClass: ApplicationDbContext,
  // Request scope
  scope: 2
};

export { IGetEventsQueryHandler, GetEventsQuery };
