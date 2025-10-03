import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import path from 'path';
import enrutadorProductos from './src/routes/productos.routes.js';
import enrutadorUsuarios from './src/routes/usuarios.routes.js';
import './src/config/database.js';
import enrutadorPedidos from './src/routes/pedidos.routes.js';
import enrutadorMailer from "./src/routes/mailer.routes.js"
import enrutadorMercadoPago from './src/routes/mercadoPago.routes.js'
import enrutadorAuth from './src/routes/auth.routes.js';
import { config } from './src/config/config.js';
import routerCloudinary from './src/routes/cloudinary.routes.js';

const app = express();

app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/public')));

try {
  app.listen(config.port, () => console.log(`Servidor conectado en el puerto ${config.port}`));
} catch (error) {
  console.log(error);
}

app.use('/api', enrutadorProductos);
app.use('/api', enrutadorUsuarios);
app.use('/api', enrutadorAuth);
app.use('/api', enrutadorPedidos);
app.use('/api', enrutadorMailer);
app.use('/api', enrutadorMercadoPago);
app.use('/api', routerCloudinary);
