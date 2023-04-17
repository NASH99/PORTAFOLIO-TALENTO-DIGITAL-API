import {pool} from '../db.js'

export const getUsuarios = async (req,res) => {
    const [ rows ] = await pool.query('select * from usuario');
    console.log('OBTENER USUARIOS')
    res.json(rows);
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

export const updateUsuarios = (req,res) => {
    res.send('Actualizando usuarios');
}

export const deleteUsuarios = (req,res) => {
    res.send('Eliminando usuarios');
}