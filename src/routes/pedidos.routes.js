import { Router } from "express";
import { crearPedido } from "../controllers/pedidos.controllers";


const enrutador = Router();

enrutador.route('/pedidos').get(crearPedido);

export default enrutador;