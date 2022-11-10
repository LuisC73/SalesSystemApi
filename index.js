require("dotenv").config();
import { join } from "path";
import cors from "cors";
import express, { json } from "express";
import { connect } from "mongoose";
import apiRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

connect("mongodb://localhost:27017/dbshop")
  .then((db) => console.log("Conexión a BD correcta"))
  .catch((error) => console.log("Error al conectarse a la BD" + error));

app.use(cors());
app.use(json());
app.use("/api", apiRoutes);
app.use(express.static(join(__dirname, "public")));

app.listen(PORT, () => console.log("Servidor iniciado..."));
