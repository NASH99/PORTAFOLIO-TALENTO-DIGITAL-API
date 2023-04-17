import {pool} from '../db.js'

export const getUsuarios = async (req,res) => {
    const [ rows ] = await pool.query('select * from usuario');
    console.log('OBTENER USUARIOS')
    res.json(rows);
}

export const getUsuario = async (req,res) => {
    const [ rows ] = await pool.query('select * from usuario where idusuario = ?',[req.params.id]);
    console.log(req.params.id)
    console.log('OBTENER USUARIO')
    if(rows.length <= 0) return res.status(404).json({
        message: 'Usuario no encontrado'
    })
    res.json(rows[0]);
}

export const createUsuarios = async (req,res) => {
    //Como extra se podrian validar los datos en caso de que se envien mal
    const {nombre,apellido,nick,email,clave,admin} = req.body;
    const [ rows ] = await pool.query('insert into usuario (nombreUsuario,apellidoUsuario,nickUsuario,emailUsuario,claveUsuario,isAdminUsuario) values (?,?,?,?,?,?)',[nombre,apellido,nick,email,clave,admin]);
    console.log('CREAR USUARIOS')
    res.send({ 
        id: rows.insertId,
        nombre,
        apellido
     });
}

export const updateUsuarios = async (req,res) => {
    const {id} = req.params;
    const {nombre,apellido} = req.body

    const [result] = await pool.query('update usuario set nombreusuario = IFNULL(?,nombreusuario) ,apellidousuario = IFNULL(?,apellidousuario) where idusuario = ?', [nombre,apellido,id])
    console.log(result)
    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Usuario no encontrado'
    });
    const [rows] = await pool.query('select * from usuario where idusuario = ?', [id])
    res.json(rows[0])
}

export const deleteUsuarios = async (req,res) => {
    const [ result ] = await pool.query('delete from usuario where idusuario = ?',[req.params.id]);
    console.log(result)
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Usuario no encontrado'
    });

    res.sendStatus(204);
}