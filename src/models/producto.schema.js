import mongoose, { Schema } from 'mongoose';

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    trim:true,
    maxLength: 30,
  },
  precio: {
    type: Number,
    required: true,
    min: 5000,
    max: 16000,
  },
  imagen: {
    type: String,
    required: true,
    unique:true,
    validate: {
      validator: function(v){
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(v);
      },
      message: props => "La imagen debe tener un formato de URL valida y terminar en jpg|jpeg|gif|png"
    }
  },
  detalle: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    minLength: 10,
    maxLength: 150,
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Pizzas', 'Hamburguesas', 'Empanadas', 'Pastas'],
  },
  estado: {
    type: String,
    required: true,
    enum: ['Disponible', 'No disponible'],
  },
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;
