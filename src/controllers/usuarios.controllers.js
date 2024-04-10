import Usuario from "../database/model/usuario.js";

export const crearUsuario = async (req, res) => {
  try {
    const { nombreCompleto, correo, clave, rol } = req.body;
    const correoVerificacion = await Usuario.findOne({ correo: correo });
    if (correoVerificacion) {
      res.status(400).json({
        mensaje: "Este correo ya se encuentra registrado.",
      });
    } else {
      const crearUsuario = new Usuario({
        nombreCompleto: nombreCompleto,
        correo: correo,
        clave: clave,
        estado: true,
        rol: rol,
      });
      crearUsuario.save();
      res.status(201).json({
        mensaje: "Usuario creado correctamente.",
        Usuario: crearUsuario,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { correo, clave } = req.body;

    const usuarioBuscado = await Usuario.findOne({ correo });

    if (!usuarioBuscado) {
      return res.status(400).json({
        mensaje: "El correo es incorrecto",
      });
    }

    const claveValida = await Usuario.findOne({ clave });

    if (!claveValida) {
      return res.status(400).json({
        mensaje: "La contraseña es incorrecta",
      });
    }

    res.status(200).json({
      mensaje: "Los datos del usuario son correctos",
      correo: correo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al intentar iniciar sesión un usuario.",
    });
  }
};
