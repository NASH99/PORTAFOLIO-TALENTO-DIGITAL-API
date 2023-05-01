import {pool} from '../db.js'

//Obtener top 10 usuarios con mayor puntuacion (topUsuario)
export const getTop10 = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 order by P.topUsuario desc limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopAfro = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 1  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopBlues = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 2  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopJazz = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 3  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopRyb = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 4  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopSalsa = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 5  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopRock = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 6  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopElectronica = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 7  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopReggaeton = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 8  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getTopPop = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT U.idUsuario, P.nombreArtistaPerfil,P.idGenero_musical,G.nombreGenero_musical ,P.topUsuario, I.idPerfil,(SELECT imagen FROM imagen where idPerfil = I.idPerfil limit 1 ) as imagen2 from imagen I INNER JOIN perfil P ON I.idPerfil = P.idPerfil INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical group by U.idUsuario, P.nombreArtistaPerfil,G.nombreGenero_musical ,P.topUsuario, I.idPerfil, imagen2 having P.idGenero_musical = 9  limit 10;');
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

