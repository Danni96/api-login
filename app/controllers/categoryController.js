const { Category } = require('../../models');


const createCategory = async (req, res) => {
    const { name } = req.body;
  
    try {
      const existingCategory = await Category.findOne({ where: { name } });
  
      if (existingCategory) {
        return res.status(400).json({ message: 'Ya existe una categoría con ese nombre' });
      }

      const newCategory = await Category.create({ name });
      res.status(201).json(newCategory);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la categoría', error });
    }
  };
  

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las categorías', error });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
