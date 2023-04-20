import {pool} from '../db.js'

export const getGeneros = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select * from genero_musical');
        console.log('OBTENER USUARIOS')
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}