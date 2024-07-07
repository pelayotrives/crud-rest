const express = require('express');
const router = express.Router();

//! Controllers
const productController = require('../controllers/productController');
//! Middlewares
const logMiddleware = require('../middlewares/logMiddleware');

router.use(logMiddleware);

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

module.exports = router;