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