import {Router} from 'express';
import { createProduct, getProduct } from '../controllers/product.js';

const router =Router();

router.get('/',getProduct);
router.post('/',createProduct);

export default router;