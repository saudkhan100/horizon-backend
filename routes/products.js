import express from 'express'
import { getProducts,postProduct } from '../controller/productController.js';

const router = express.Router();

router.get('/',getProducts)
router.post('/',postProduct)

export default router;