import { Event } from '@domain/entities/event';
import { EntitySchema } from 'typeorm';
const TABLE_NAME = 'events';

// TODO: Remove this when will find a way to
// test timezone wih sqlite. Added this because sqlite
// doesnot support timezon.
const isTestEnv = true; //process.env.NODE_ENV === 'test';

const timezoneType = isTestEnv ? 'datetime' : 'timestamp with local time zone';
export const EventEntitySchema = new EntitySchema<Event>({
  name: TABLE_NAME,
  target: Event,
  columns: {
    id: {
      primary: true,
      generated: 'uuid',
      type: 'string'
    },
    createdDate: {
      type: timezoneType,
      createDate: true
    },
    name: {
      type: String,
      length: 32,
      nullable: false
    },
    description: {
      type: String,
      nullable: false
    },
    startDate: {
      type: timezoneType,
      nullable: false
    },
    endDate: {
      type: timezoneType,
      nullable: false
    }
  }
});
