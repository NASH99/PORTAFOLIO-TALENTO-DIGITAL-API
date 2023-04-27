import {pool} from '../db.js'

export const getTop10 = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario FROM perfil P INNER JOIN genero_musical G on P.idGenero_musical = G.idGenero_musical INNER JOIN usuario U on P.idUsuario = U.idUsuario order by topUsuario desc limit 10;');
        console.log('OBTENER TOP USUARIOS')
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTop = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select perfil.idPerfil,perfil.nombreArtistaPerfil, perfil.tituloPerfil,perfil.telefonoPerfil,perfil.nacimientoPerfil,perfil.generoPerfil,perfil.biografiaPerfil,usuario.nombreUsuario from perfil inner join usuario on perfil.idUsuario = usuario.idUsuario;');
        console.log('OBTENER TOP USUARIOS')
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}