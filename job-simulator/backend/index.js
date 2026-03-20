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


// usar puerto desde .env
const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
}); 