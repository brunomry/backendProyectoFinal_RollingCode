import Usuario from "../models/usuario.schema.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";
import bcrypt from 'bcrypt';

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(formatoRespuesta(true, "Lista de productos", [...usuarios], null));      
  } catch (error) {
    console.error(error);
    res.status(404).json(formatoRespuesta(false, "No se pudo obtener la lista de usuarios", null,{
      code:404,
      details: error.message
    }));
  }
};

export const obtenerUsuario = async (req,res) => {
  try {
      const {id} = req.params;
      const usuarioBuscado = await Usuario.findById(id);
      res.status(200).json(formatoRespuesta(true, "Usuario encontrado", usuarioBuscado, null));
  } catch (error) {
      console.error(error);
      res.status(404).json(formatoRespuesta(false, "No se pudo encontrar el usuario", null,{
        code:404,
        details: error.message
      })); 
  }
}

export const editarUsuario = async (req, res) => {
  try {
    const {id} = req.params;
    const usuarioBuscado = await Usuario.findById(id);

    if (!usuarioBuscado) {
      res.status(404).json(formatoRespuesta(false, "No se pudo encontrar el usuario", null,{
        code:404,
        details: "No se pudo encontrar el usuario"
      }));
    }
 
    await Usuario.updateOne(
      { _id: usuarioBuscado._id },
      { $set: { estado: req.body.estado } }
    );

    res.status(200).json(formatoRespuesta(true, "El estado del usuario fue modificado con éxito", null, null));
    
  } catch (error) {
    console.log(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
};

export const crearUsuarioAdmin = async (req, res) => {
  try {
    const { nombreCompleto, correo, clave, rol} = req.body;

    const correoVerificacion = await Usuario.findOne({ correo: correo });

    if (correoVerificacion) {
      res.status(400).json(formatoRespuesta(false, 'Este correo ya se encuentra registrado.', null, {
        code: 400,
        details: 'Este correo ya se encuentra registrado.'
      }));
    } 

    const saltos = bcrypt.genSaltSync(10);
    const claveEncriptada = bcrypt.hashSync(clave, saltos);

    const nuevoUsuario = new Usuario({
        nombreCompleto: nombreCompleto,
        correo: correo,
        clave: claveEncriptada,
        estado: true,
        rol: rol,
      });

    nuevoUsuario.save();

    const data = {
        nombreCompleto: nombreCompleto,
        correo: correo,
        estado: true,
        rol: rol,
    }

    res.status(201).json(formatoRespuesta(true, "El usuario admin fue creado correctamente", data, null));
    
  } catch (error) {
    console.log(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
};