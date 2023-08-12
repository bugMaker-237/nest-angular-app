import { ConfigType } from '@nestjs/config';
import { Connection } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { DatabaseConfig, databaseConfigKey } from './database.config';
import { EventEntitySchema } from './db-schemas/event-schema';

export const DBConnectionProvider = {
  provide: Connection,
  useFactory: async (dbConfig?: ConfigType<DatabaseConfig>) => {
    // You could also use MySQL if you want
    // I will stick with SQLite for the moment.

    const connection = new Connection({
      type: 'sqlite',
      name: 'default',
      database: dbConfig.name,
      entities: [EventEntitySchema],
      synchronize: true
    } as SqliteConnectionOptions);

    return connection;
  },
  inject: [databaseConfigKey]
};
