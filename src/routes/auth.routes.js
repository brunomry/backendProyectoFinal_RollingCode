import { Router } from 'express';
import {
  crearUsuario,
  login
} from '../controllers/auth.controller.js';
import { loginValidaciones, registerValidaciones } from '../validations/auth.validations.js';
import resultadoValidacion from '../middlewares/validaciones.middleware.js';

const routerAuth = Router();

routerAuth.route('/registro').post([registerValidaciones, resultadoValidacion], crearUsuario);
routerAuth.route('/login').post([loginValidaciones, resultadoValidacion], login)

export default routerAuth;