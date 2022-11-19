import cors from "cors";
import { Router } from "express";
import {
  readSellers,
  readSeller,
  deleteSeller,
  updateSeller,
  updateTotal,
  createSeller,
  readSales,
  readSale,
  deleteSale,
  updateSale,
  createSale,
} from "./controllers.js";

const router = Router();

// --------------- API REST CRUD

router.get("/sellers", cors(), readSellers); // Read All
router.get("/sellers/:id", cors(), readSeller); // Read
router.delete("/sellers/:id", cors(), deleteSeller); // Delete
router.put("/sellers/:id", cors(), updateSeller); // Update
router.put("/sellers/:id", cors(), updateTotal); // Update Total
router.post("/sellers", cors(), createSeller); // Create

router.get("/sales", cors(), readSales); // Read All
router.get("/sales/:id", cors(), readSale); // Read
router.delete("/sales/:id", cors(), deleteSale); // Delete
router.put("/sales/:id", cors(), updateSale); // Update
router.post("/sales", cors(), createSale); // Create

export default router;
