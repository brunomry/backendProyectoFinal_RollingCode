import Pedido from '../database/model/pedido.js';
import Producto from '../database/model/producto.js';
import Usuario from '../database/model/usuario.js';

export const crearUsuario = async (req, res) => {
  try {
    const valCorreo =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const { nombreCompleto, correo, clave, rol } = req.body;
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
          rol: rol,
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

export const login = async (req, res) => {
  try {
    const { correo, clave } = req.body;

    const usuarioBuscado = await Usuario.findOne({ correo });

    if (!usuarioBuscado) {
      return res.status(400).json({
        mensaje: 'El correo es incorrecto',
      });
    }

    const claveValida = await Usuario.findOne({ clave });

    if (!claveValida) {
      return res.status(400).json({
        mensaje: 'La contraseña es incorrecta',
      });
    }

    res.status(200).json({
      mensaje: 'Los datos del usuario son correctos',
      correo: correo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al intentar iniciar sesión un usuario.',
    });
  }
};

export const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido(req.body);
    await nuevoPedido.save();
    res.status(200).json({
      mensaje: 'El pedido fue creado correctamente.',
      pedido: nuevoPedido,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: 'Ocurrio un error al intentar crear el pedido.' });
  }
};

export const editarPedido = async (req, res) => {
  try {
    const buscarPedido = await Pedido.findById(req.params.id);
    if (!buscarPedido) {
      return res.status(404).json({
        mensaje: 'No se pudo editar el pedido.',
      });
    }
    await Pedido.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: 'El pedido fue modificado exitosamente' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: 'Ocurrio un error al intentar editar el producto' });
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    const buscarPedido = await Pedido.findById(req.params.id);
    if (!buscarPedido) {
      return res.status(404).json({
        mensaje: 'No se pudo encontrar el pedido especificado.',
      });
    }
    await Pedido.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'El pedido fue eliminado con éxito.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Ocurrió un error al intentar borrar el pedido.',
    });
  }
};
