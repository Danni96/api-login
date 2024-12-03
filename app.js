const express = require('express');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(express.json()); // Para parsear JSON en las solicitudes

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
