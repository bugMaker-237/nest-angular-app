import { Event } from '@domain/entities/Event';
import { IEventRepository } from '@domain/repo/IEventRepository';

export class EventRepository implements IEventRepository {
  getEvents(
    numberOfResults: number,
    offset: number,
    searchCriteria?: string
  ): Promise<{ totalCount: number; data: Event[] }> {
    throw new Error(
      'Method not implemented.' + numberOfResults + offset + searchCriteria
    );
  }
}
