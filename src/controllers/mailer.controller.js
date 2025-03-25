import fs from "fs-extra";
import transporter from "../services/mailer.service.js";
import path from "path";
import { config} from "../config/config.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const enviarCorreo = async (req, res) => {
  const pathHTML = path.resolve("./public/correoDeConfirmacion.html");

  const template = fs.readFileSync(pathHTML, "utf8").toString();

  const { correo } = req.body;

  try {
    const resultado = await transporter.sendMail({
      from: `AmbienteBohemio ${config.email}`,
      to: correo,
      subject: "Registro Ambiente Bohemio",
      body: "Verificacion",
      html: template,
    });

    res.status(200).json(formatoRespuesta(true, "Correo enviado exitosamente", null, null));
  } catch (error) {
    console.log(error);
    res.status(400).json(formatoRespuesta(false, "Hubo un error en la solicitud", null, {
      code: 400,
      details: error.message
    }));
  }
};