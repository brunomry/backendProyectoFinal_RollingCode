import { Router } from 'express';
import {
  crearUsuarioAdmin,
  editarUsuario,
  obtenerUsuario,
  obtenerUsuarios,
} from '../controllers/usuarios.controller.js';
import validarJWT from '../helpers/verificarJWT.js';
import validacionCrearUsuarioAdmin from '../validations/admin.validations.js';

const enrutador = Router();

enrutador.route('/login').get(obtenerUsuarios);
enrutador.route('/usuario/:id').post([validarJWT],editarUsuario);
enrutador.route('/usuario/:id').get(obtenerUsuario);
enrutador.route('/crearusuario').post([validacionCrearUsuarioAdmin],crearUsuarioAdmin)

export default enrutador;
