import { Router } from 'express'
import { getUsuarios, createUsuarios,updateUsuarios,deleteUsuarios} from '../controllers/usuarios.controllers.js';
import {ping} from '../controllers/index.controllers.js';

const router = Router();

//Creacion de rutas junto con su importacion de controlador
router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuarios);
router.put('/usuarios', updateUsuarios);
router.delete('/usuarios', deleteUsuarios);

router.get('/ping',ping)

//Exportar ruta para el index
export default router;