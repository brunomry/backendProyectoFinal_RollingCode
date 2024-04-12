import { Router } from "express";
import { crearPedido, editarPedido } from "../controllers/pedidos.controllers.js";

const enrutador = Router();

enrutador.route('/pedidos').post(crearPedido);
enrutador.route('/pedido/:id').put(editarPedido);

export default enrutador;