const { Product, Category } = require('../../models');

const createProduct = async (req, res) => {
  const { name, price, description, categoryId } = req.body;

  try {
    const existingProduct = await Product.findOne({ where: { name } });

    if (existingProduct) {
      return res.status(400).json({ message: 'Ya existe un producto con ese nombre' });
    }

    const product = await Product.create({ name, price, description, categoryId });
    res.status(201).json(product);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: 'category',
      },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

module.exports = {
  createProduct,
  getAllProducts
};