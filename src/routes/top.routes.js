import {Router} from 'express'
import { getTop10 } from '../controllers/top.controllers.js';

const router = Router();
router.get('/top10', getTop10);

export default router;