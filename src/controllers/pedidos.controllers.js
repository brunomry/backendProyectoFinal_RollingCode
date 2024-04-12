import Pedido from "../database/model/pedido.js";

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

export const editarPedido = async (req,res) => {
  try {
    const pedidoEncontrado = await Pedido.findById(req.params.id);

    if(!pedidoEncontrado){
      return res.status(404).json({
        mensaje: "No se pudo editar el estado del Pedido. El id es incorrecto"
      })
    }

    await Pedido.findByIdAndUpdate(req.params,req.body);
    res.status(200).json({
      mensaje:"El estado del Pedido fue modificado con éxito"
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje:"Ocurrió un error al intentar editar el estado del pedido"
    });
  }
}