import { Router } from "express";
import { crearPedido } from "../controllers/pedidos.controllers";


const enrutador = Router();

enrutador.route('/pedidos').post(crearPedido);

export default enrutador;