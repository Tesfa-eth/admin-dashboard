import express from "express";
import {
  getProduct,
  getCustomers,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/customers", getCustomers);
router.get("/geography", getGeography);

export default router;
