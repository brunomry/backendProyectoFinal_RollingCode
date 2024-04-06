import Usuario from '../database/model/usuario.js';

export const crearUsuario = async (req, res) => {
  try {
    const valCorreo =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const { nombreCompleto, correo, clave } = req.body;
    if (valCorreo.test(correo)) {
      const correoVerificacion = await Usuario.findOne({ correo: correo });
      if (correoVerificacion) {
        res.status(200).json({
          mensaje: 'Este correo ya se encuentra registrado.',
        });
      } else {
        const crearUsuario = new Usuario({
          nombreCompleto: nombreCompleto,
          correo: correo,
          clave: clave,
          estado: true,
        });
        crearUsuario.save();
        res.status(200).json({
          mensaje: 'Usuario creado correctamente.',
          Usuario: crearUsuario,
        });
      }
    } else {
      return res.status(400).json({
        mensaje: 'Correo invalido',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: 'Error interno del servidor.',
    });
  }
};
