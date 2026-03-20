import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
//funcion para esperar a la conexion con la DB
export const connectWithRetry = async () => {
    while (true) {
        try {
            await pool.query("SELECT 1");
            console.log("✅ DB connected");
            break;
        } catch (err) {
            console.log("⏳ Waiting for DB...");
            await new Promise(res => setTimeout(res, 2000));
        }
    }
};