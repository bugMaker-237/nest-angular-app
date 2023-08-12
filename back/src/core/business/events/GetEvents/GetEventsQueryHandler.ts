import { IEventRepository } from '@domain/repo/IEventRepository';
import { GetEventsQuery } from './GetEventsQuery';
import { Pagination } from '@domain/value-objects/Paagination';
import { GetEventsResponseItem } from './GetEventsResponse';
import { AppResult } from '@domain/value-objects/AppResult';
import { AppError } from '@domain/value-objects/AppError';

export abstract class IGetEventsQueryHandler {
  abstract execute(
    query: GetEventsQuery
  ): Promise<AppResult<Pagination<GetEventsResponseItem>>>;
}

@DependencyInjection.Inject()
export class GetEventsQueryHandler implements IGetEventsQueryHandler {
  constructor(private readonly _eventRepo: IEventRepository) {}

  public async execute(
    query: GetEventsQuery
  ): Promise<AppResult<Pagination<GetEventsResponseItem>>> {
    const isValid = this.validate(query);

    if (!isValid)
      return AppResult.failure(AppError.badRequest('Invalid query params'));

    const result = await this._eventRepo.getEvents(
      query.numberOfResults,
      query.offset,
      query.searchCriteria
    );
    const pageIndex = query.offset / query.numberOfResults;

    return AppResult.success(
      new Pagination(result.data, pageIndex, result.totalCount)
    );
  }

  private validate(query: GetEventsQuery): boolean {
    return query.numberOfResults > 0 && query.offset >= 0;
  }
}
