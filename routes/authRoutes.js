const { Router } = require('express');
const { register, login } = require('../app/controllers/authController');
const validatePassword = require('../app/middlewares/validatePassword');
const { validateRegister, validateInputs } = require('../app/middlewares/validators');


const router = Router();

router.post('/register', validateRegister, validateInputs, validatePassword, register);
router.post('/login', login); 

module.exports = router;
