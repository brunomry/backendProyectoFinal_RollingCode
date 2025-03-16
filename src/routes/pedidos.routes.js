import { Router } from "express";

import { crearPedido, editarPedido, obtenerPedido, obtenerPedidos } from "../controllers/pedidos.controller.js";
import validarJWT from "../helpers/verificarJWT.js";

const enrutador = Router();

enrutador.route('/pedidos').post(crearPedido).get(obtenerPedidos);
enrutador.route('/pedido/:id').put([validarJWT],editarPedido).get(obtenerPedido);

export default enrutador;