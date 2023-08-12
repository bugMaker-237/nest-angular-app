import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  ApplicationDbContextProvider,
  EventRepositoryProvider,
  GetEventsQueryHandlerProvider
} from '@infra/injector';
import { EventsController } from './events.controller';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { DBConnectionProvider } from './config/connection';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: `.env`,
      load: [databaseConfig]
    })
  ],
  controllers: [AppController, EventsController],
  providers: [
    AppService,
    DBConnectionProvider,
    ApplicationDbContextProvider,
    GetEventsQueryHandlerProvider,
    EventRepositoryProvider
  ]
})
export class AppModule {}
