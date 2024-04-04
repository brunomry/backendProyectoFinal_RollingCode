import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 25
  },
  precio: {
    type: Number,
    required: true,
    min: 3500,
    max: 10000
  },
  imagen: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 50
  },
  categoria:{
    type: String,
    required: true,
    enum: ["pizzas","hamburguesas","empanadas","pastas"]
  },
  estado:{
    type: String,
    required: true,
    enum: ["Disponible","No disponible"]
  }
});
