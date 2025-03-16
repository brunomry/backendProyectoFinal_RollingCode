import Usuario from "../models/usuario.schema";

export const obtenerUsuarios = async (req, res) => {
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

export const obtenerUsuario = async (req,res) => {
  try {
      const usuario = await Usuario.findById(req.params.id);
      res.status(200).json(usuario);
  } catch (error) {
      console.error(error);
      return res.status(404).json({
          mensaje: "No se pudo obtener el usuario"
      })   
  }
}

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

export const crearUsuarioAdmin = async (req, res) => {
  try {
    const { nombreCompleto, correo, clave, rol} = req.body;
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