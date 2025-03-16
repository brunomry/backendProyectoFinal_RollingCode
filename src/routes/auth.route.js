import { Router } from 'express';
import {
  crearUsuario,
  login
} from '../controllers/auth.controller.js';
import validacionRegistro from '../validations/registro.validations.js';
import validacionLogin from '../validations/login.validations.js';

const enrutador = Router();

enrutador.route('/registro').post([validacionRegistro], crearUsuario);
enrutador.route('/login').post([validacionLogin], login)

export default enrutador;