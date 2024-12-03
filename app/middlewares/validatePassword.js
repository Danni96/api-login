const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'La contraseña es obligatoria' });
    }

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(password)) {
        return res.status(400).json({
            message: 'La contraseña debe ser alfanumérica',
        });
    }

    next();
};

module.exports = validatePassword;
