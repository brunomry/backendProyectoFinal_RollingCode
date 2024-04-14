import { Router } from 'express';
import {
  crearUsuario,
  editarUsuario,
  login,
} from '../controllers/usuarios.controllers.js';
import validacionRegistro from '../helpers/validacionesDeRegistro.js';
import validacionLogin from '../helpers/validacionDeLogin.js';

const enrutador = Router();

enrutador.route('/registro').post([validacionRegistro], crearUsuario);
enrutador.route('/login').post([validacionLogin], login);
enrutador.route('/usuario/:id').post(editarUsuario);

export default enrutador;
