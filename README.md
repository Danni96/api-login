# API de Gestión de Usuarios

Una API RESTful para gestionar usuarios, que incluye funcionalidades de registro, autenticación y validación de contraseñas alfanuméricas. La API está construida con Node.js, Express, Sequelize y PostgreSQL.

## Tecnologías utilizadas

- **Node.js**: JavaScript runtime para ejecutar el servidor.
- **Express**: Framework para crear la API RESTful.
- **Sequelize**: ORM (Object-Relational Mapping) para interactuar con PostgreSQL.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **JWT**: Para la autenticación basada en tokens.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **PostgreSQL**: [Descargar PostgreSQL](https://www.postgresql.org/)

Además, necesitarás crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```plaintext
PORT=TUPUERTO
DB_HOST=localhost
DB_PORT=
DB_USER=
DB_PASSWORD=tu_contraseña
DB_NAME=api-node
JWT_SECRET=tu_clave_secreta
