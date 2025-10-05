import Producto from "../models/producto.schema.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res
      .status(200)
      .json(formatoRespuesta(true, "Lista de productos", [...productos], null));
  } catch (error) {
    console.log(error);
    res.status(404).json(
      formatoRespuesta(
        false,
        "No se pudo obtener la lista de productos",
        null,
        {
          code: 404,
          details: error.message,
        }
      )
    );
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const productoBuscado = await Producto.findById(id);

    res
      .status(200)
      .json(
        formatoRespuesta(true, "Producto encontrado", productoBuscado, null)
      );
  } catch (error) {
    console.log(error);
    res.status(404).json(
      formatoRespuesta(false, "No se pudo encontrar el producto", null, {
        code: 404,
        details: error.message,
      })
    );
  }
};

export const crearProducto = async (req, res) => {
  try {
    const { nombre, detalle, precio, imagen, categoria, estado } = req.body;

    if (!nombre || !detalle || !precio || !imagen || !categoria || !estado) {
      return res.status(400).json(
        formatoRespuesta(false, "Todos los campos son obligatorios", null, {
          code: 400,
          details: "Todos los campos son obligatorios",
        })
      );
    }

    const nombreProducto = await Producto.findOne({ nombre: nombre });

    if (nombreProducto) {
      return res.status(409).json(
        formatoRespuesta(
          false,
          "Este producto ya se encuentra registrado.",
          null,
          {
            code: 409,
            details: "Este producto ya se encuentra registrado",
          }
        )
      );
    }

    const nuevoProducto = new Producto({
      nombre,
      detalle,
      precio,
      imagen,
      categoria,
      estado,
    });

    await nuevoProducto.save();

    res
      .status(201)
      .json(
        formatoRespuesta(
          true,
          "El producto fue creado correctamente",
          nuevoProducto,
          null
        )
      );
  } catch (error) {
    console.log(error);
    res.status(500).json(
      formatoRespuesta(false, "Error interno del servidor", null, {
        code: 500,
        details: error.message,
      })
    );
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEncontrado = await Producto.findById(id);

    if (!productoEncontrado) {
      return res.status(404).json(
        formatoRespuesta(false, "No se pudo encontrar el producto.", null, {
          code: 404,
          details: "No se pudo encontrar el producto.",
        })
      );
    }

    await Producto.findByIdAndDelete(id, req.body);

    res
      .status(200)
      .json(
        formatoRespuesta(true, "El producto fue eliminado con éxito", id, null)
      );
  } catch (error) {
    console.error(error);
    res.status(500).json(
      formatoRespuesta(false, "Error interno del servidor", null, {
        code: 500,
        details: error.message,
      })
    );
  }
};

export const editarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const buscarProducto = await Producto.findById(id);

    if (!buscarProducto) {
      res.status(404).json(
        formatoRespuesta(false, "No se pudo encontrar el producto", null, {
          code: 404,
          details: "No se pudo encontrar el producto",
        })
      );
    }

    const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res
      .status(200)
      .json(
        formatoRespuesta(
          true,
          "El producto fue modificado con éxito",
          productoActualizado,
          null
        )
      );
  } catch (error) {
    console.error(error);
    res.status(500).json(
      formatoRespuesta(false, "Error interno del servidor", null, {
        code: 500,
        details: error.message,
      })
    );
  }
};

export const obtenerProductosPorFiltros = async (req, res) => {
  try {
    const { nombre, categoria, estado, precio } = req.query;

    const filtros = {};

    if (nombre) {
      filtros.nombre = { $regex: nombre, $options: "i" };
    }

    if (categoria) {
      filtros.categoria = categoria;
    }

    if (estado) {
      filtros.estado = estado;
    }

    if (precio) {
      filtros.precio = precio;
    } 

    const productos = await Producto.find(filtros);
    
    res.status(200).json({ data: productos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
