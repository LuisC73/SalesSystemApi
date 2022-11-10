import cors from "cors";
import { Router } from "express";
import {
  readClientes,
  readCliente,
  deleteCliente,
  updateCliente,
  createCliente,
  readArticulos,
  readArticulo,
  deleteArticulo,
  updateArticulo,
  createArticulo,
} from "./controllers.js";

const router = Router();

// --------------- API REST CRUD

router.get("/clientes", cors(), readClientes); // Read All
router.get("/clientes/:id", cors(), readCliente); // Read
router.delete("/clientes/:id", cors(), deleteCliente); // Delete
router.put("/clientes/:id", cors(), updateCliente); // Update
router.post("/clientes", cors(), createCliente); // Create

router.get("/articulos", cors(), readArticulos); // Read All
router.get("/articulos/:id", cors(), readArticulo); // Read
router.delete("/articulos/:id", cors(), deleteArticulo); // Delete
router.put("/articulos/:id", cors(), updateArticulo); // Update
router.post("/articulos", cors(), createArticulo); // Create

export default router;
