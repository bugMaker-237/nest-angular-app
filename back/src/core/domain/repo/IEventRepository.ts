import { Event } from '../entities/Event';

export abstract class IEventRepository {
  abstract getEvents(
    numberOfResults: number,
    offset: number,
    searchCriteria?: string
  ): Promise<{ totalCount: number; data: Event[] }>;
}
