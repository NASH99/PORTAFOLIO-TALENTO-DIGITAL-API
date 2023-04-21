import express from 'express';
import { pool } from './db.js';
import usuariosRoutes  from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'
import generosRoutes from './routes/generos.routes.js'

import {PORT} from './config.js'

const app = express();

//Convertir los datos en json para las rutas
app.use(express.json())

//Uso de rutas REVISAR USO DE RUTAS DE USUARIO.ROUTES
app.use(indexRoutes);
app.use('/api',usuariosRoutes);
app.use('/api',generosRoutes);

app.use((req,res,next)=> {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

export default app;