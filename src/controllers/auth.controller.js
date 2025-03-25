import Usuario from '../models/usuario.schema.js';
import bcrypt from 'bcrypt';
import generarJWT from '../helpers/generarJWT.js';
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const crearUsuario = async (req, res) => {
  try {
    const { nombreCompleto, correo, clave } = req.body;

    const correoVerificacion = await Usuario.findOne({ correo: correo });

    if (correoVerificacion) {
      res.status(400).json(formatoRespuesta(false, 'Este correo ya se encuentra registrado.', null, {
        code: 400,
        details: error.message
      }));
    } else {
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

      res.status(201).json(formatoRespuesta(true, "Usuario creado correctamente", nuevoUsuario, null));
    }
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

    const usuarioBuscado = await Usuario.findOne({ correo });

    if (!usuarioBuscado) {
      res.status(400).json(formatoRespuesta(false, 'El usuario no existe', null, {
        code: 400,
        details: error.message
      }));
    }

    const claveValida = bcrypt.compareSync(clave, usuarioBuscado.clave);

    if (!claveValida) {
      res.status(400).json(formatoRespuesta(false, 'La contraseña es incorrecta', null, {
        code: 400,
        details: error.message
      }));
    }

    const token = await generarJWT(usuarioBuscado.correo);

    res.status(200).json(formatoRespuesta(true, "Usuario autenticado", { correo, token}, null));
  } catch (error) {
    console.error(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
};