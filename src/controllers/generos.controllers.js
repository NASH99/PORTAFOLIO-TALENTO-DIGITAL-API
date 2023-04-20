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

export const getGenerosUsuarios = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select * from usuario where idGenero_musical = ?',[req.params.id]);
        console.log(req.params.id)
        console.log('OBTENER USUARIOS POR GENERO MUSICAL')
        if(rows.length <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        })
        res.json(rows[0]);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }

}
