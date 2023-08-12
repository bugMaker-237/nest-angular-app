import { getTestModule } from '../test-module';
import { GetEventsQuery, IGetEventsQueryHandler } from '@infra/injector';

describe('GetEventsQuery', () => {
  let handler: IGetEventsQueryHandler;

  beforeEach(async () => {
    const moduleFixture = await getTestModule();

    handler = await moduleFixture.resolve<IGetEventsQueryHandler>(
      IGetEventsQueryHandler
    );
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
    const query = new GetEventsQuery();
    query.numberOfResults = 10;
    query.offset = 0;

    // act
    const res = await handler.execute(query);

    expect(res.error).toBeUndefined();
    expect(res.succeeded).toBeTruthy();
    expect(res.result).toBeDefined();
    expect(res.result.totalCount).toBe(0);
  });
});
