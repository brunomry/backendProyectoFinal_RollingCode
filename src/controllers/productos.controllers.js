import Producto from '../database/model/producto.js';

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({
      mensaje: 'Producto creado correctamente.',
      Producto: nuevoProducto,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'No se pudo procesar la solicitud para crear un producto.',
    });
  }
};
