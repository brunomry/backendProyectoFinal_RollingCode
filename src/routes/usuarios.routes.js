import { Router } from 'express';
import {
  crearUsuario,
  editarUsuario,
  login,
  obtenerUsuarios,
} from '../controllers/usuarios.controllers.js';
import validacionRegistro from '../helpers/validacionesDeRegistro.js';
import validacionLogin from '../helpers/validacionDeLogin.js';
import validarJWT from '../helpers/verificarJWT.js';
const enrutador = Router();

enrutador.route('/registro').post([validacionRegistro], crearUsuario);
enrutador.route('/login').post([validacionLogin], login).get(obtenerUsuarios);
enrutador.route('/usuario/:id').post([validarJWT],editarUsuario);

export default enrutador;
