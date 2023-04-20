import {Router} from 'express'
import {getGeneros} from '../controllers/generos.controllers.js';

const router = Router();
router.get('/generos', getGeneros);

export default router;