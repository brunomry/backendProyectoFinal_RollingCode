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
    validate: {
      validator: function(v){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
      },
      message: props => "debe ingresar un correo válido. Ej nombre@correo.com"
    }
  },
  clave: {
    type: String,
    required: true,
    unique: false,
    minLength: 8
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
