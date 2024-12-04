const express = require('express');
const categoryController = require('../app/controllers/categoryController'); 
const authMiddleware = require('../app/middlewares/authMiddleware'); 
const router = express.Router();


router.post('/', authMiddleware, categoryController.createCategory); 
router.get('/', authMiddleware, categoryController.getAllCategories); 

module.exports = router;
