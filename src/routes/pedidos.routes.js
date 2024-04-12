import { Router } from "express";
import { crearPedido } from "../controllers/pedidos.controllers.js";

const enrutador = Router();

enrutador.route('/pedidos').post(crearPedido);

export default enrutador;