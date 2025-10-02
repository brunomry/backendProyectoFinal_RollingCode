import Usuario from '../models/usuario.schema.js';
import bcrypt from 'bcrypt';
import generarJWT from '../helpers/generarJWT.js';
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const crearUsuario = async (req, res) => {
  try {
    const { nombreCompleto, correo, clave } = req.body;

    if (!correo || !clave || !nombreCompleto) {
    return res.status(400).json(formatoRespuesta(false, "Todos los campos son obligatorios", null, {
      code: 400,
      details: "Todos los campos son obligatorios",
    }));
  }

    const correoVerificacion = await Usuario.findOne({ correo: correo });

    if (correoVerificacion) {
      return res.status(409).json(formatoRespuesta(false, 'Este correo ya se encuentra registrado.', null, {
        code: 409,
        details: 'Este correo ya se encuentra registrado'
      }));
    }
    
      const saltos = bcrypt.genSaltSync(10);
      const claveEncriptada = bcrypt.hashSync(clave, saltos);

      const nuevoUsuario = new Usuario({
        nombreCompleto: nombreCompleto,
        correo: correo,
        clave: claveEncriptada,
        estado: true,
        rol: "Usuario",
      });

      await nuevoUsuario.save();

      const token = await generarJWT(nuevoUsuario.correo);

      const data = {
        nombreCompleto,
        correo,
        estado: true,
        rol: "Usuario",
        token
      }

      res.status(201).json(formatoRespuesta(true, "Usuario creado correctamente", data, null));
    
  } catch (error) {
    console.log(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
};

export const login = async (req, res) => {
  try {
    const { correo, clave } = req.body;

     if (!correo || !clave) {
      return res.status(400).json(formatoRespuesta(false, "Correo y contraseña son obligatorios", null, {
        code: 400,
        details: "Correo y contraseña son obligatorios",
      }));
    }

    const usuarioBuscado = await Usuario.findOne({ correo });

    if (!usuarioBuscado) {
      res.status(400).json(formatoRespuesta(false, 'El usuario no existe', null, {
        code: 400,
        details: 'El usuario no existe'
      }));
    }

    const claveValida = bcrypt.compareSync(clave, usuarioBuscado.clave);

    if (!claveValida) {
      res.status(401).json(formatoRespuesta(false, 'La contraseña es incorrecta', null, {
        code: 401,
        details: 'La contraseña es incorrecta'
      }));
    }

    const token = await generarJWT(usuarioBuscado.correo);

    const data = {
      nombreCompleto: usuarioBuscado.nombreCompleto,
      correo,
      token,
      rol: usuarioBuscado.rol
    }

    res.status(200).json(formatoRespuesta(true, "Usuario autenticado", data, null));
  } catch (error) {
    console.error(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
};