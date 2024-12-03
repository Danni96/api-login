const { Router } = require('express');
const { register, login } = require('../app/controllers/authController');
const validatePassword = require('../app/middlewares/validatePassword');

const router = Router();

// Rutas de autenticación
router.post('/register', validatePassword, register);
router.post('/login', login); 

module.exports = router;
