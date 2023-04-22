import {pool} from '../db.js'

export const getTop10 = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select * from usuario order by topUsuario desc limit 10');
        console.log('OBTENER TOP USUARIOS')
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}