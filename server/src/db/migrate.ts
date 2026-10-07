import { fileURLToPath } from 'node:url';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { loadConfig } from '../config.ts';
import { createDb } from './client.ts';

const config = loadConfig();
const database = createDb(config.DATABASE_URL);
await migrate(database.db, { migrationsFolder: fileURLToPath(new URL('../../drizzle', import.meta.url)) });
await database.close();
console.log('Migrações aplicadas.');
