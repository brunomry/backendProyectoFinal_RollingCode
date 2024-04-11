# Backend de Ambiente Bohemio: Restaurante

Este proyecto es el backend de la aplicación web sobre un restaurante.

## Descripción

Este backend se encarga de manejar la lógica del servidor y la comunicación con la base de datos para la aplicación de restaurante.

## Alcance del proyecto

El alcance de este proyecto se centra en realizar todos los pasos del CRUD y deberá contar con un login con diferentes opciones dependiendo el usuario que se loguea. Se considera que solo el usuario administrador podrá administrar las diferentes opciones de menú, mientras que los clientes deberán iniciar su sesión o registrarse para poder solicitar un pedido.

## Enunciado - Requerimientos

Crear un proyecto de backend con los endpoints necesarios para poder
administrar los productos, pedidos, usuarios y realizar login y registro de los mismos.
Modelar la base de datos necesaria con MongoDB para almacenar estos datos y
validar los datos recibidos en los request antes de almacenar en la base de datos.

### Estructura de base datos básica sugerida

  * Usuarios: nombre, email, password, estado, perfil
  * Productos: nombre, estado, precio, detalle, categoría, imagen (con url).
  * Pedidos: usuario, fecha, productos, estado

  Opcional:
  
  * Categoría: nombre, estado

NOTA: La estructura de datos mencionada es solo una sugerencia de los datos mínimos que se deben almacenar, pueden agregar toda la información que consideren necesaria. 

## Integración con proyecto de Frontend

Este proyecto de Backend se integró a su proyecto Frontend correspondiente.

#### Repositorio Frontend: [frontendProyectoFinal_RollingCode](https://github.com/brunomry/frontendProyectoFinal_RollingCode.git)

## Tecnologías Utilizadas

<a href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript (ES6+)" title="JavaScript (ES6+)" width="48" height="48"/></a>
<a href="https://nodejs.org/"><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png" alt="Node.js"   title="Node js" width="50"></a>
<a href="https://www.mongodb.com/"><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="MongoDB" title="MongoDB" width="60"></a>
<a href="https://mongoosejs.com/"><img src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" alt="Mongoose" title="Mongoose" width="75"></a>

  * ### Otras:

    - [Express js](https://expressjs.com/es/)
    - [Express-validator](https://express-validator.github.io/docs/guides/getting-started)
    - [bcrypt](https://www.npmjs.com/package/bcrypt)

## Endpoints API

- /api/productos
    * Endpoint para gestionar productos del restaurante, incluyendo la visualización y creación (POST) de productos.
- /api/producto/:id
    * Endpoint para obtener información detallada de un producto específico y también para editar (PUT) o eliminar (DELETE) dicho producto.
- /api/login
    * Endpoint para autenticar usuarios y obtener un token de acceso.
- /api/registro
    * Endpoint para registrar nuevos usuarios en la aplicación.
- /api/pedidos
    * Endpoint para visualizar la lista de pedidos realizados por los usuarios.
- /api/pedido/:id
    * Endpoint para obtener información detallada de un pedido específico y para actualizar (PUT) su estado.

## Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).
- MongoDB instalado (o extension de VS) y en ejecución en el sistema o conexión a una instancia de MongoDB en la nube.

## Configuración

1. Clona este repositorio en tu máquina local a través de una terminal:

  git clone <[url-del-repositorio](https://github.com/brunomry/backendProyectoFinal_RollingCode.git)>

2. Navega al directorio del proyecto:

  cd backendProyectoFinal_RollingCode

3. Instala las dependencias del proyecto:

  npm install

4. Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Aquí hay un ejemplo:

* PORT=3000
* MONGODB_URI=tu_uri_de_conexion_a_MongoDB
* JWT_SECRET=tu_secreto_para_generar_JWT

## Equipo

| Nombre                              | Perfil GitHub                                            |
|-------------------------------------|----------------------------------------------------------|
| Bruno Madozzo Romay                 | [brunomry](https://github.com/brunomry)                  |
| Leonel Rodrigo Cordero              | [LeonelRC23](https://github.com/LeonelRC23)              |
| Victor Fernando Herrera                      | [HerreFer](https://github.com/HerreFer)                |
| Elias Juarez                      | [Elias-Juarez](https://github.com/Elias-Juarez)                |