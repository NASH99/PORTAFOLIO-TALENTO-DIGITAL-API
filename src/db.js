import { createPool } from 'mysql2/promise';
import {DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER,PORT} from './config.js';

//Pool de conexiones a la base de datos importando variables de entorno desde el archivo config.js
export const pool = createPool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});
