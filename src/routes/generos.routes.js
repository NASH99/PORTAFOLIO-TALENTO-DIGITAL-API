import {Router} from 'express'
import {getGeneros, getGenerosUsuarios} from '../controllers/generos.controllers.js';

const router = Router();
router.get('/generos', getGeneros);
router.get('/generos/usuarios/:id', getGenerosUsuarios);

export default router;