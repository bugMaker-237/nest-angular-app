import {
  GetEventsQueryHandler,
  IGetEventsQueryHandler
} from '@business/events/GetEvents/get-events-query.handler';
import { IEventRepository } from '@domain/repo/i.event.repository';
import { EventRepository } from './data/event.repository';
import { GetEventsQuery } from '@business/events/GetEvents/get-events-query';
import { ApplicationDbContext } from './data/application-db.context';

export const GetEventsQueryHandlerProvider = {
  provide: IGetEventsQueryHandler,
  useClass: GetEventsQueryHandler
};

export const EventRepositoryProvider = {
  provide: IEventRepository,
  useClass: EventRepository
};

export const ApplicationDbContextProvider = {
  provide: ApplicationDbContext,
  useClass: ApplicationDbContext
};

export { IGetEventsQueryHandler, GetEventsQuery };
