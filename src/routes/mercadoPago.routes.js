import { Router } from "express";
import { crearPreferenciaMP } from "../controllers/mercadoPago.controllers.js";

const enrutador = Router();

enrutador.route('/create-order').post(crearPreferenciaMP);


export default enrutador;