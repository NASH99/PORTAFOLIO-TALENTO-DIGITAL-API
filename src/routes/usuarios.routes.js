import {Router} from 'express'

const router = Router();

router.get('/usuarios', (req,res)=>{res.send('obteniendo usuarios')})
router.post('/usuarios', (req,res)=>{res.send('agregando usuarios')})
router.put('/usuarios', (req,res)=>{res.send('actualizando usuarios')})
router.delete('/usuarios', (req,res)=>{res.send('eliminando usuarios')})

export default router