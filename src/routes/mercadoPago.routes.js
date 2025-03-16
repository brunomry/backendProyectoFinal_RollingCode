import { Router } from "express";
import { crearPreferenciaMP } from "../controllers/mercadoPago.controller.js";

const enrutador = Router();

enrutador.route('/create-order').post(crearPreferenciaMP);


export default enrutador;