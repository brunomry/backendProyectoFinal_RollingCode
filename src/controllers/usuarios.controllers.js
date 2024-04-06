import Usuario from '../database/model/usuario';

export const crearUsuario = async (req, res) => {
  try {
    const valCorreo =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const { nombre, correo, clave, estado } = req.body;
    if (valCorreo.test(correo)) {
      const correoVerificacion = await Usuario.findOne({ correo: correo });
      if (correoVerificacion) {
        res.estatus(200).json({
          mensaje: 'Este correo ya se encuentra registrado.',
        });
      } else {
        const crearUsuario = new Usuario({
          correo: correo,
          nombre: nombre,
          clave: clave,
          estado: true,
        });
        crearUsuario.save();
        res.estatus(200).json({
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
    res.status(500).json({
      mensaje: 'Error interno del servidor.',
    });
  }
};
