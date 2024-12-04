const express = require('express');
const productController = require('../app/controllers/ProductCategories'); 
const authMiddleware = require('../app/middlewares/authMiddleware'); 
const router = express.Router();


router.post('/', authMiddleware, productController.createProduct); 
router.get('/', authMiddleware, productController.getAllProducts); 

module.exports = router;
