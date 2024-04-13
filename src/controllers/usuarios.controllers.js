import Usuario from '../database/model/usuario.js';
import bcrypt from 'bcrypt';
import generarJWT from '../helpers/generarJWT.js';

export const crearUsuario = async (req, res) => {
  try {
    const { nombreCompleto, correo, clave, rol } = req.body;
    const correoVerificacion = await Usuario.findOne({ correo: correo });
    if (correoVerificacion) {
      res.status(400).json({
        mensaje: 'Este correo ya se encuentra registrado.',
      });
    } else {
      const saltos = bcrypt.genSaltSync(10);
      const claveEncriptada = bcrypt.hashSync(clave, saltos);
      const crearUsuario = new Usuario({
        nombreCompleto: nombreCompleto,
        correo: correo,
        clave: claveEncriptada,
        estado: true,
        rol: rol,
      });
      crearUsuario.save();
      res.status(201).json({
        mensaje: 'Usuario creado correctamente.',
        Usuario: crearUsuario,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: 'Error interno del servidor.',
    });
  }
};

export const login = async (req, res) => {
  try {
    const { correo, clave } = req.body;

    const usuarioBuscado = await Usuario.findOne({ correo });

    if (!usuarioBuscado) {
      return res.status(400).json({
        mensaje: 'El correo es incorrecto',
      });
    }

    const claveValida = bcrypt.compareSync(clave, usuarioBuscado.clave);

    if (!claveValida) {
      return res.status(400).json({
        mensaje: 'La contraseña es incorrecta',
      });
    }

    const token = await generarJWT(
      usuarioBuscado._id,
      usuarioBuscado.correo,
      usuarioBuscado.rol,
      usuarioBuscado.nombreCompleto
    );

    res.status(200).json({
      mensaje: 'Los datos del usuario son correctos',
      correo: correo,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al intentar iniciar sesión',
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ mensaje: 'Ocurrio un error al realizar la solicitud' });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const buscarUsuario = await Usuario.findById(req.params.id);
    if (!buscarUsuario) {
      return res.status(404).json({
        mensaje: 'El usuario no fue encontrado.',
      });
    } else {
      await Usuario.updateOne(
        { _id: buscarUsuario._id },
        { $set: { estado: req.body.estado } }
      );
      res
        .status(200)
        .json({ mensaje: 'El usuario fue actualizado con exito.' });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: 'Ocurrio un error al intentar editar el usuario.' });
  }
};
