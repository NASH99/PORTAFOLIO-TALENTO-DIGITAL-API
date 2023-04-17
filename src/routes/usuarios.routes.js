import {Router} from 'express'
import { getUsuarios,getUsuario, createUsuarios,updateUsuarios,deleteUsuarios} from '../controllers/usuarios.controllers.js';

const router = Router();

//Creacion de rutas junto con su importacion de controlador
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.post('/usuarios', createUsuarios);
router.put('/usuarios', updateUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);

export default router