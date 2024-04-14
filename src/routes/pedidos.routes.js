import { Router } from "express";

import { crearPedido, editarPedido, obtenerPedido, obtenerPedidos } from "../controllers/pedidos.controllers.js";

const enrutador = Router();

enrutador.route('/pedidos').post(crearPedido).get(obtenerPedidos);
enrutador.route('/pedido/:id').put(editarPedido).get(obtenerPedido);


enrutador.route('/pedidos').post(crearPedido).get(obtenerPedidos);
enrutador.route('/pedido/:id').post(crearPedido).get(obtenerPedido);


export default enrutador;