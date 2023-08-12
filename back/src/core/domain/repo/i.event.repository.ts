import { Event } from '../entities/event';

export abstract class IEventRepository {
  /**
   * Returns a list of events
   * @param numberOfResults
   * @param offset
   * @param searchCriteria
   */
  abstract getEvents(
    numberOfResults: number,
    offset: number,
    searchCriteria?: string
  ): Promise<{ totalCount: number; data: Event[] }>;
}
