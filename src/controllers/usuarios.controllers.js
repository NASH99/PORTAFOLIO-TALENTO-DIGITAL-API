import {pool} from '../db.js'

export const getUsuarios = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select * from usuario');
        console.log('OBTENER USUARIOS')
        res.json(rows);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const getUsuario = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select * from usuario where idusuario = ?',[req.params.id]);
        console.log(req.params.id)
        console.log('OBTENER USUARIO')
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

export const getUsuarioPerfil = async (req,res) => {
    try{
        const [ rows ] = await pool.query('select * from perfil P INNER JOIN usuario U ON P.idUsuario = U.idUsuario INNER JOIN pais Pa ON Pa.idPais = P.idPais INNER JOIN genero_musical G ON P.idGenero_musical = G.idGenero_musical WHERE U.idUsuario = ?;',[req.params.id]);
        console.log(req.params.id)
        console.log('OBTENER USUARIO')
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

export const getImagenPerfil = async (req,res) => {
    try{
        const [ rows ] = await pool.query('SELECT imagen from imagen WHERE idPerfil = ?;',[req.params.id]);
        console.log(req.params.id)
        console.log('OBTENER IMAGEN USUARIO')
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

export const createUsuarios = async (req,res) => {
    //Como extra se podrian validar los datos en caso de que se envien mal
    let {nombre,apellido,nick,email,clave,admin} = req.body;
    //En el postman metodo POST debe ir con los nombres de las variables de arriba
    console.log(nombre,admin)
    if(admin != true){
        admin = false;
    }
    console.log(admin)
    try{
        const [ rows ] = await pool.query('CALL crearUsuario(?,?,?,?,?,?);',[nombre,apellido,nick,email,clave,admin]);
        console.log('CREAR USUARIOS')
        res.send({ 
            id: rows.insertId,
            nombre,
            apellido
        });
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const updateUsuarios = async (req,res) => {
    const {id} = req.params;
    const {nombre,apellido} = req.body;

    try{
        const [result] = await pool.query('update usuario set nombreusuario = IFNULL(?,nombreusuario) ,apellidousuario = IFNULL(?,apellidousuario) where idusuario = ?', [nombre,apellido,id])
        console.log(result)
        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        });
        const [rows] = await pool.query('select * from usuario where idusuario = ?', [id])
        res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}

export const deleteUsuarios = async (req,res) => {
    try{
        //REVISAR CUANDO SE AGREGUEN MAS DE UNA PUBLICACION
        const [ result ] = await pool.query('CALL eliminarUsuario(?);',[req.params.id]);
        console.log(result)
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        });
        res.sendStatus(204);
    } catch (error){
        return res.status(500).json({
            message: 'Algo falló'
        })
    }
}