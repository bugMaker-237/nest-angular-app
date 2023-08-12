import { getTestModule } from '../test-module';
import { ApplicationDbContext } from '@infra/data/application-db.context';
import { GetEventsQuery, IGetEventsQueryHandler } from '@infra/injector';
import { Event } from '@domain/entities/event';

describe('GetEventsQuery', () => {
  let handler: IGetEventsQueryHandler;
  let ctx: ApplicationDbContext;
  beforeEach(async () => {
    const moduleFixture = await getTestModule();

    handler = await moduleFixture.resolve<IGetEventsQueryHandler>(
      IGetEventsQueryHandler
    );
    ctx = await moduleFixture.resolve<ApplicationDbContext>(
      ApplicationDbContext
    );

    // await seedDb(ctx);
  });

  it('Should return invalid query params', async () => {
    // arrange
    const query = new GetEventsQuery();

    // act
    const res = await handler.execute(query);

    expect(res.error).toBeDefined();
    expect(res.error.errorId).toBe(400);
    expect(res.error.descriptions[0]).toBe('Invalid query params');
  });

  it('Should execute return 0 as totalcount', async () => {
    // arrange
    await seedDb(ctx);
    const query = new GetEventsQuery();
    query.numberOfResults = 10;
    query.offset = 0;

    // act
    const res = await handler.execute(query);

    expect(res.error).toBeUndefined();
    expect(res.succeeded).toBeTruthy();
    expect(res.result).toBeDefined();
    expect(res.result.totalCount).toBe(5);
  });
});

async function seedDb(ctx: ApplicationDbContext) {
  const newDate = new Date();
  const newDate2 = new Date(
    newDate.getFullYear() + 1,
    newDate.getMonth(),
    newDate.getDate()
  );

  for (let i = 1; i <= 5; i++)
    ctx.events.add(
      Event.create('Event ' + i, 'Event description ' + i, newDate, newDate2)
    );

  await ctx.saveChanges();
}
