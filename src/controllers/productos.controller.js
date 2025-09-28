import Producto from "../models/producto.schema.js"
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const listarProductos = async (req, res) =>{
    try{
        const productos = await Producto.find();
        res.status(200).json(formatoRespuesta(true, "Lista de productos", [...productos], null));    
      }catch(error){
        console.log(error);
        res.status(404).json(formatoRespuesta(false, "No se pudo obtener la lista de productos", null,{
          code:404,
          details: error.message
        }));
    }
}

export const obtenerProducto = async (req, res) => {
    try{
      const { id } = req.params;

      const productoBuscado = await Producto.findById(id);

      res.status(200).json(formatoRespuesta(true, "Producto encontrado", productoBuscado, null));
    }catch(error){
        console.log(error);
        res.status(404).json(formatoRespuesta(false, "No se pudo encontrar el producto", null,{
          code:404,
          details: error.message
        }));
    }
}

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);

    await nuevoProducto.save();

    res.status(201).json(formatoRespuesta(true, "El producto fue creado correctamente", nuevoProducto, null));
  } catch (error) {
    console.log(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEncontrado = await Producto.findById(id);

    if(!productoEncontrado){
      return res.status(404).json(formatoRespuesta(false, "No se pudo encontrar el producto.", null,{
        code:404,
        details: "No se pudo encontrar el producto."
      }));
    }

    await Producto.findByIdAndDelete(id, req.body);

    res.status(200).json(formatoRespuesta(true, "El producto fue eliminado con éxito", null, null));

  } catch (error) {
    console.error(error);
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
}

export const editarProducto = async(req, res)=>{
  try {
    const { id } = req.params;
    const buscarProducto = await Producto.findById(id);

    if(!buscarProducto){
      res.status(404).json(formatoRespuesta(false, "No se pudo encontrar el producto", null,{
        code:404,
        details: "No se pudo encontrar el producto"
      }));
    }

    await Producto.findByIdAndUpdate(id, req.body);

    res.status(200).json(formatoRespuesta(true, "El producto fue modificado con éxito", null, null));

  } catch (error) {
    console.error(error)
    res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
      code: 500,
      details: error.message
    }));
  }
}