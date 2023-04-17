import express from 'express';
import { pool } from './db.js';
import usuariosRoutes  from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

//Convertir los datos en json para las rutas
app.use(express.json())

//Uso de rutas REVISAR USO DE RUTAS DE USUARIO.ROUTES
app.use('/api',indexRoutes);
app.use('/api',usuariosRoutes);

//Levantar el servidor
app.listen(80);
console.log('Server running')

