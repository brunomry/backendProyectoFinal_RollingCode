import Pedido from "../models/pedido.schema.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const crearPedido = async (req, res) => {
    try {
      const nuevoPedido = await Pedido(req.body);

      await nuevoPedido.save();

      res.status(201).json(formatoRespuesta(true, "El pedido fue creado correctamente", nuevoPedido, null));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatoRespuesta(false, 'Error interno del servidor', null, {
        code: 500,
        details: error.message
      }));
    }
  };

export const editarPedido = async (req,res) => {
  try {
    const { id } = req.params;
    const pedidoEncontrado = await Pedido.findById(id);

    if(!pedidoEncontrado){
      return res.status(404).json(formatoRespuesta(false, "No se pudo editar el estado del Pedido.", null,{
        code:404,
        details: error.message
      }));
    }

    await Pedido.findByIdAndUpdate(id,req.body);

    res.status(200).json(formatoRespuesta(true, "El estado del pedido fue modificado con éxito", null, null));

  } catch (error) {
    console.error(error);
    res.status(500).json(formatoRespuesta(false, "Ocurrió un error al intentar editar el estado del pedido", null, {
      code:500,
      details: error.message
    }));
  }
}

export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();

    res.status(200).json(formatoRespuesta(true, "Lista de pedidos", [...pedidos], null));

  } catch (error) {
    console.log(error);
    res.status(404).json(formatoRespuesta(false, "No se pudo obtener la lista de pedidos", null,{
      code:404,
      details: error.message
    }));
  }
};

export const obtenerPedido = async (req, res) => {
  try{
    const pedidoBuscado = await Pedido.findById(req.params.id);

    res.status(200).json(formatoRespuesta(true, "Pedido encontrado", pedidoBuscado, null));

  }catch(error){
    console.log(error)
    res.status(404).json(formatoRespuesta(false, "No se pudo encontrar el pedido", null,{
      code:404,
      details: error.message
    }));
  }
}

