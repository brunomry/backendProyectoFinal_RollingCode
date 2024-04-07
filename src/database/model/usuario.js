import mongoose, { Schema } from 'mongoose';

const usuarioSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    unique: false,
    minLength: 7,
    maxLength: 30,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 265,
  },
  clave: {
    type: String,
    required: true,
    unique: false,
    minLength: 8,
    maxLength: 16,
  },
  estado: {
    type: Boolean,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ['Administrador', 'Usuario'],
  },
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
