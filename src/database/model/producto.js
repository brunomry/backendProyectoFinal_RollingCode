import mongoose, { Schema } from 'mongoose';

const pedidoSchema = new Schema({
  usuario: {
    type: String,
    required: true,
    minLength: 3, //provisional
    maxLength: 20, //provisional
  },
  monto: {
    type: Number,
    required: true,
  },
  //Falta crear productoSchema
  //   productos: [productoSchema],
  metodoEnvio: {
    type: Number,
    required: true,
    enum: [1, 2],
  },
  estadoEnvio: {
    type: Boolean,
    required: true,
  },
});

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;
