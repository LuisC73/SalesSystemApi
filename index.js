import dotenv from "dotenv";
import { join } from "path";
import cors from "cors";
import express, { json } from "express";
import { connect } from "mongoose";
import apiRoutes from "./routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
dotenv.config();

connect("mongodb://localhost:27017/dbshop")
  .then((db) => console.log("Conexión a BD correcta"))
  .catch((error) => console.log("Error al conectarse a la BD" + error));

app.use(cors());
app.use(json());
app.use("/api", apiRoutes);
app.use("/static", express.static("public"));

app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}...`));
