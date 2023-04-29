import {Router} from 'express'
import { getTop10 } from '../controllers/top.controllers.js';

const router = Router();

//Creacion de rutas junto con su importacion de controlador
router.get('/top10', getTop10);


export default router;