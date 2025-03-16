import { Router } from "express";
import { enviarCorreo } from "../controllers/mailer.controller.js";

const enrutador = Router();

enrutador.route('/mailer').post(enviarCorreo)


export default enrutador;