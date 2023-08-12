import {
  GetEventsQueryHandler,
  IGetEventsQueryHandler
} from '@business/events/GetEvents/GetEventsQueryHandler';

export const GetEventsQueryHandlerProvider = {
  provide: IGetEventsQueryHandler,
  useClass: GetEventsQueryHandler
};
