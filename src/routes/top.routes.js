import {Router} from 'express'
import { getTop10 , getTop} from '../controllers/top.controllers.js';

const router = Router();
router.get('/top10', getTop10);
router.get('/top', getTop);

export default router;