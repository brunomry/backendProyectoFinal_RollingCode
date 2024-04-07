import mongoose, { Schema } from 'mongoose';

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 50,
  },
  precio: {
    type: Number,
    required: true,
    min: 3500,
    max: 10000,
  },
  imagen: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: true,
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
