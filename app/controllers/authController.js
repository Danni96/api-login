const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({
            message: 'Usuario registrado con éxito',
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar al usuario por correo electrónico
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Comparar contraseñas
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

module.exports = { register, login };
