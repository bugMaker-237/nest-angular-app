import { Event } from '@domain/entities/event';
import { IEventRepository } from '@domain/repo/i.event.repository';
import { ApplicationDbContext } from './application-db.context';
import { IQueryable } from 'slim-ef';

@DependencyInjection.Inject()
export class EventRepository implements IEventRepository {
  constructor(private _context: ApplicationDbContext) {}
  async getEvents(
    numberOfResults: number,
    offset: number,
    searchCriteria?: string
  ): Promise<{ totalCount: number; data: Event[] }> {
    let query = this._context.events as IQueryable<Event>;

    if (searchCriteria)
      query = query.where((s, $) => s.name.includes($.searchCriteria), {
        searchCriteria
      });

    query = query.skip(offset).take(numberOfResults);
    return {
      data: await query.toList(),
      totalCount: await query.count()
    };
  }
}
