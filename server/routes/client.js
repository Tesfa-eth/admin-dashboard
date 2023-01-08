import express from "express";
import {
  getProduct,
  getCustomers,
  getGeography,
  getTransaction,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/customers", getCustomers);
router.get("/geography", getGeography);
router.get("/transactions", getTransaction);

export default router;
