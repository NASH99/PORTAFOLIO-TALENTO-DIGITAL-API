import {Router} from 'express'
import { getUsuarios,getUsuario,getUsuarioPerfil,getImagenPerfil, createUsuarios,updateUsuarios,deleteUsuarios} from '../controllers/usuarios.controllers.js';

const router = Router();

//Creacion de rutas junto con su importacion de controlador
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.get('/perfil/:id', getUsuarioPerfil);
router.get('/perfil/img/:id', getImagenPerfil);

router.post('/usuarios', createUsuarios);
//Patch para actualizar un valor y que los demas queden iguales, con PUT se actualizan todos o los que no se envian quedan en null
router.patch('/usuarios/:id', updateUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);

export default router