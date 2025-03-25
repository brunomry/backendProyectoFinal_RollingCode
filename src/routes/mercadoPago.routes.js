import { Router } from "express";
import { crearPreferenciaMP } from "../controllers/mercadoPago.controller.js";

const routerMP = Router();

routerMP.route('/create-order').post(crearPreferenciaMP);

export default routerMP;