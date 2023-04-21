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
        
        const [ rows ] = await pool.query('select usuario.idUsuario,usuario.nombreUsuario,usuario.apellidoUsuario,usuario.nickUsuario,usuario.emailUsuario, genero_musical.nombreGenero_musical from usuario inner join genero_musical on usuario.idGenero_musical = genero_musical.idGenero_musical where usuario.idGenero_musical = ?',[req.params.id]);
        console.log('OBTENER USUARIOS POR GENERO MUSICAL')
        console.log(rows)
        console.log(rows.length)
        if(rows.length <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        })
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }

}

