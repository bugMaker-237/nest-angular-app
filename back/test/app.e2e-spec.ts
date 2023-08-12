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

  it('/events (POST)', () => {
    return request(app.getHttpServer())
      .post('/events')
      .send({
        name: 'AnewEvent',
        description: 'AnewDesc',
        startDate: new Date(),
        endDate: new Date(2024, 10, 1)
      })
      .expect(201);
  });
});
