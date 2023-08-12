import { getTestModule } from './test-module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await getTestModule();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/events (GET)', () => {
    return request(app.getHttpServer())
      .get('/events?numberOfResults=10')
      .expect(200)
      .expect({
        data: [],
        pageIndex: 0,
        totalCount: 0
      });
  });
});
