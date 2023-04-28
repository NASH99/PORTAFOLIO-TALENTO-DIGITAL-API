import {config} from 'dotenv'

config()
//obteniendo los datos en el archivo .env para poder pasarlos a variables
export const PORT = process.env.PORT || 3000 
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || '123456789'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'bpmcommunity'
export const DB_PORT = process.env.DB_PORT || 3306