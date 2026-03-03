import express from 'express';
import { deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { createProduct } from '../controllers/productController.js';

const router = express.Router();

//GET ALL PRODUCTS

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;