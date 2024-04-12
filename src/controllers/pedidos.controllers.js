import Pedido from "../database/model/pedido.js";

export const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido(req.body);
    await nuevoPedido.save();
    res.status(200).json({
      mensaje: "El pedido fue creado correctamente.",
      pedido: nuevoPedido,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar crear el pedido." });
  }
};

export const obtenerPedidos = async (req, res) => {
  try {
    const listaDePedidos = await Pedido.find();
    res.status(200).json(listaDePedidos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "No se pudo conseguir la lista de pedidos",
    });
  }
};

export const obtenerPedido = async (req, res) => {
  try{
    const pedidoBuscado = await Pedido.findById(req.params.id);
    res.status(200).json(pedidoBuscado);
  }catch(error){
    console.log(error)
    res.status(404).json({
      message: "El pedido no existe o no pudo ser encontrado"
    })
  }
}
