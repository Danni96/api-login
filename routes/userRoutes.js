const { Router } = require('express');
const verifyToken = require('../app/middlewares/authMiddleware');

const router = Router();

// Ejemplo: Ruta protegida
router.get('/profile', verifyToken, (req, res) => {
    res.json({ message: 'Acceso concedido', user: req.user });
});

module.exports = router;
