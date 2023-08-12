import { GetEventsQuery, IGetEventsQueryHandler } from '@infra/injector';
import { Controller, Get, Query } from '@nestjs/common';
import { Extensions } from './extensions';

@Controller('events')
export class EventsController {
  constructor(private readonly handler: IGetEventsQueryHandler) {}

  @Get()
  async getHello(@Query() query: GetEventsQuery) {
    console.log({ query });
    const result = await this.handler.execute({
      numberOfResults: query.numberOfResults,
      offset: 0
    });

    if (!result.succeeded) return Extensions.handleErrors(result.error);

    return result.result;
  }
}
