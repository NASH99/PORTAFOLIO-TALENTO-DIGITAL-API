import {pool} from '../db.js'

export const getTop10 = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select usuario.idUsuario,usuario.nombreUsuario,usuario.nickUsuario, genero_musical.nombreGenero_musical from usuario inner join genero_musical on usuario.idGenero_musical = genero_musical.idGenero_musical order by topUsuario desc limit 10;');
        console.log('OBTENER TOP USUARIOS')
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}