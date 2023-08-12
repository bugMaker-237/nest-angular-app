import { getTestModule } from '../test-module';
import { IAddEventCommandHandler } from '@business/events/add-event/add-event.command.handler';
import { AddEventRequest } from '@business/events/add-event/add-event.request';
import { Event } from '@domain/entities/event';

describe('AddEventCommand', () => {
  let handler: IAddEventCommandHandler;

  beforeEach(async () => {
    const moduleFixture = await getTestModule();

    handler = await moduleFixture.resolve<IAddEventCommandHandler>(
      IAddEventCommandHandler
    );
  });

  it('Should return invalid query params', async () => {
    // arrange
    const request = new AddEventRequest();

    // act
    const res = await handler.execute(request);

    expect(res.error).toBeDefined();
    expect(res.error.errorId).toBe(400);
  });

  it('Should add event succcessfully', async () => {
    // arrange
    const request = new AddEventRequest();
    request.description = 'Adesc';
    request.name = 'A request';
    request.startDate = new Date();
    request.endDate = new Date(2023, 10, 10);
    const utcEndDate = Event.getUTCDate(request.endDate);

    // act
    const res = await handler.execute(request);

    expect(res.error).toBeUndefined();
    expect(res.result.name).toBe('A request');
    expect(res.result.description).toBe('Adesc');
    expect(res.result.enDate).toStrictEqual(utcEndDate);
  });
});
