import { Router } from 'express';
import {
  crearUsuario,
  crearUsuarioAdmin,
  editarUsuario,
  login,
  obtenerUsuarios,
} from '../controllers/usuarios.controllers.js';
import validacionRegistro from '../helpers/validacionesDeRegistro.js';
import validacionLogin from '../helpers/validacionDeLogin.js';
import validarJWT from '../helpers/verificarJWT.js';
import validacionCrearUsuarioAdmin from '../helpers/validacionCrearUsuarioAdmin.js';
const enrutador = Router();

enrutador.route('/registro').post([validacionRegistro], crearUsuario);
enrutador.route('/login').post([validacionLogin], login).get(obtenerUsuarios);
enrutador.route('/usuario/:id').post([validarJWT],editarUsuario);
enrutador.route('/crearusuario').post([validacionCrearUsuarioAdmin],crearUsuarioAdmin)

export default enrutador;
