import {Router} from 'express'
import { getTop10, getTopAfro, getTopBlues, getTopElectronica, getTopJazz, getTopPop, getTopReggaeton, getTopRock, getTopRyb, getTopSalsa } from '../controllers/top.controllers.js';

const router = Router();

//Creacion de rutas junto con su importacion de controlador
router.get('/top10', getTop10);
router.get('/topAfro', getTopAfro);
router.get('/topBlues', getTopBlues);
router.get('/topJazz', getTopJazz);
router.get('/topR&B', getTopRyb);
router.get('/topSalsa', getTopSalsa);
router.get('/topRock', getTopRock);
router.get('/topElectronica', getTopElectronica);
router.get('/topReggaeton', getTopReggaeton);
router.get('/topPop', getTopPop);

export default router;