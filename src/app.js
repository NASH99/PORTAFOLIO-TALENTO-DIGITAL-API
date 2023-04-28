import express from 'express';
import usuariosRoutes  from './routes/usuarios.routes.js'
import generosRoutes from './routes/generos.routes.js'
import topRoutes from './routes/top.routes.js'
const app = express();

//Convertir los datos en json para las rutas
app.use(express.json())

//Uso de rutas REVISAR USO DE RUTAS DE USUARIO.ROUTES
app.use('/api',usuariosRoutes);
app.use('/api',generosRoutes);
app.use('/api',topRoutes);

//En caso de no encontrar una ruta, se genera un status 404
app.use((req,res,next)=> {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

export default app;