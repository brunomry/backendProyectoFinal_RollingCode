import { Router } from "express";
import { enviarCorreo } from "../controllers/mailer.controller.js";

const routerMailer = Router();

routerMailer.route('/mailer').post(enviarCorreo)

export default routerMailer;