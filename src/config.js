import {config} from 'dotenv'

config()
//obteniendo los datos en el archivo .env para poder pasarlos a variables
export const PORT = process.env.PORT || 3001 
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'jJ88S3tIh3Auk5oC6yTU'
export const DB_HOST = process.env.DB_HOST || 'containers-us-west-206.railway.app'
export const DB_DATABASE = process.env.DB_DATABASE || 'railway'
export const DB_PORT = process.env.DB_PORT || 6940