import { Router } from "express";
import { crearPedido } from "../controllers/pedidos.controllers.js";

const enrutador = Router();

enrutador.route('/pedidos').post(crearPedido);
enrutador.route('/pedido/:id').post(crearPedido);

export default enrutador;