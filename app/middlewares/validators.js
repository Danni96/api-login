const { check, validationResult } = require('express-validator');

const validateRegister = [
    check('name').notEmpty().withMessage('El nombre es obligatorio'),
    check('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
    check('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/[0-9]/)
        .withMessage('La contraseña debe incluir al menos un número')
        .matches(/[a-zA-Z]/)
        .withMessage('La contraseña debe incluir al menos una letra'),
];

const validateInputs = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateRegister, validateInputs };
