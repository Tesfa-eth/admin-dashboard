import express from "express";
import { getProduct, getCustomers } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/customers", getCustomers);

export default router;
