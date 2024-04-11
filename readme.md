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

- [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs): Un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor. Es ideal para construir aplicaciones web y APIs.

- [Express.js](https://expressjs.com/es/): Es un marco de aplicación web de Node.js minimalista y flexible que proporciona un conjunto robusto de características para desarrollar aplicaciones web y APIs de manera rápida y sencilla.

- [MongoDB](https://www.mongodb.com/es): Una base de datos NoSQL que utiliza documentos JSON para almacenar datos. Es escalable y flexible, ideal para aplicaciones que manejan grandes volúmenes de datos y requieren un esquema dinámico.

- [Mongoose](https://mongoosejs.com/): Una biblioteca de modelado de objetos MongoDB para Node.js que proporciona una solución simple pero potente para trabajar con MongoDB. Facilita la definición de modelos, esquemas y la interacción con la base de datos.

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript): El lenguaje de programación fundamental para el desarrollo web. En el contexto de del proyecto, se utiliza tanto en el lado del servidor (Node.js) como en el lado del cliente.

- [Express-validator](https://express-validator.github.io/docs/guides/getting-started): Un middleware de Express.js que proporciona funciones para validar y sanitizar datos de entrada en las solicitudes HTTP, lo cual es crucial para garantizar la seguridad y la integridad de los datos en una aplicación web.

- [bcrypt](https://www.npmjs.com/package/bcrypt): Una biblioteca de cifrado de contraseñas que se utiliza para almacenar de manera segura las contraseñas en la base de datos. Utiliza un algoritmo de hashing irreversible que hace que sea difícil descifrar las contraseñas incluso si la base de datos es comprometida.

## Endpoints API

- /api/productos
    * descripción
- /api/producto/:id
    * descripción
- /api/login
    * descripción
- /api/registro
    * descripción
- /api/pedidos
    * descripción
- /api/pedido/:id
    * descripción

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