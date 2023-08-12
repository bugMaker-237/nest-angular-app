import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  type: process.env.DATABASE_TYPE as any,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  name: process.env.DATABASE_NAME,
  charset: process.env.DATABASE_CHARSET
}));

export const databaseConfigKey = databaseConfig.KEY;
export type DatabaseConfig = typeof databaseConfig;
