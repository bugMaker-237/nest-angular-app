import '@api/config/native-ioc.injector';
import { AppModule } from '@api/app.module';
import { Test } from '@nestjs/testing';
import { getTestConnection } from './test-connection';
import { Connection } from 'typeorm';

export const getTestModule = async () =>
  await Test.createTestingModule({
    imports: [AppModule]
  })
    .overrideProvider(Connection)
    .useFactory({
      factory: getTestConnection
    })
    .compile();
