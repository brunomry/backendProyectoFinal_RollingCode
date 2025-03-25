import { MercadoPagoConfig, Preference } from "mercadopago";
import { formatoRespuesta } from "../utils/respuesta.util.js";

const accessToken = process.env.TOKEN_MP;
const publicKey = process.env.MP_TOKEN_ACCESS;
const client = new MercadoPagoConfig({ accessToken });

export const crearPreferenciaMP = async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: 1,
          unit_price: Number(req.body.unit_price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://ambiente-bohemio-restaurante.netlify.app/menu"
      },
    };

    const preference = new Preference(client);
    const result = await preference.create({body});
    const preferenceID = result.id;

    const data = {
      respuesta : result,
      preferenceID: preferenceID,
      publicKey: publicKey
    }

    res.json(data);

  } catch (error) {
    console.log(error);
    res.status(500).json(formatoRespuesta(false,"Error al crear la preferencia",null, {
      code: 500,
      details: error.message
    })
    );
  }
};