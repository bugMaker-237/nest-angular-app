import {
  GetEventsQueryHandler,
  IGetEventsQueryHandler
} from '@business/events/GetEvents/GetEventsQueryHandler';
import { IEventRepository } from '@domain/repo/IEventRepository';
import { EventRepository } from './data/EventRepository';
import { GetEventsQuery } from '@business/events/GetEvents/GetEventsQuery';
import { ApplicationDbContext } from './data/ApplicationDbContext';

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
