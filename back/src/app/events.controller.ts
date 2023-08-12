import { GetEventsQuery, IGetEventsQueryHandler } from '@infra/injector';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Extensions } from './extensions';
import { AddEventRequest } from '@business/events/add-event/add-event.request';
import { IAddEventCommandHandler } from '@business/events/add-event/add-event.command.handler';

@Controller('events')
export class EventsController {
  constructor(
    private readonly queryHandler: IGetEventsQueryHandler,
    private readonly commandHandler: IAddEventCommandHandler
  ) {}

  @Get()
  async getEvents(@Query() query: GetEventsQuery) {
    const result = await this.queryHandler.execute({
      numberOfResults: query.numberOfResults,
      offset: 0
    });

    if (!result.succeeded) return Extensions.handleErrors(result.error);

    return result.result;
  }

  @Post()
  async addEvents(@Body() request: AddEventRequest) {
    const result = await this.commandHandler.execute(request);

    if (!result.succeeded) return Extensions.handleErrors(result.error);

    return result.result;
  }
}
