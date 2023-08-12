import { EventEntitySchema } from '@api/config/db-schemas/event-schema';
import { Connection } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { resolve } from 'path';

export const getTestConnection = () => {
  const dbPath = resolve(__dirname, 'db/test_event.db');

  return new Connection({
    type: 'sqlite',
    database: dbPath,
    entities: [EventEntitySchema],
    dropSchema: true,
    synchronize: true
  } as SqliteConnectionOptions);
};
