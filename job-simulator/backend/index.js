import express from "express";
import cors from "cors";

import routes from "./routes.js";
import { pool, connectWithRetry } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());


// ruta base para fighters
app.use("/fighters", routes);


// esperar a la conexion con la DB
await connectWithRetry();


// crear tabla si no existe
await pool.query(`
  CREATE TABLE IF NOT EXISTS fighters (
    id SERIAL PRIMARY KEY,
    campo1 TEXT NOT NULL,
    campo2 TEXT NOT NULL,
    campo3 TEXT NOT NULL,
    campo4 INTEGER NOT NULL,
    campo5 REAL NOT NULL,
    campo6 BOOLEAN NOT NULL
  )
`);


// levantar servidor
app.listen(8080, () => {
    console.log("🚀 Server running on port 8080");
}); 