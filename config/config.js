require('dotenv').config(); 

const config = {
    PORT: process.env.PORT || 3000,
    host: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    dialect: process.env.DB_DIALECT || 'postgres', 
};


module.exports = config;
