import { Router } from "express";
import { getProducts , getProduct , createProduct , updateProduct , deleteProduct } from "../controllers/product.controller.js";
import { validateProduct } from "../utils/validateProduct.js";

const router = Router();


router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',validateProduct,createProduct);
router.put('/:id',validateProduct,updateProduct);
router.delete('/:id',deleteProduct);


export default router;

