import { createPool } from 'mysql2/promise';

export const pool = createPool({
    user: 'root',
    host: 'localhost',
    password: '123456789',
    port: 3306,
    database: 'bpmcommunity'
});
