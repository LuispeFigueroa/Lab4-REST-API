
// pool se encarga de manejar la conexión a la base de datos
import pkg from 'pg';
const { Pool } = pkg;

// importamos dotenv para que lea mi archivo .env
import dotenv from 'dotenv';
dotenv.config();

//usando las variables de entorno creamos la conexion
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

//funcion para esperar a que la base de datos este lista
export const connectWithRetry = async () => {
    while (true) {
        try {
            await pool.query("SELECT 1");
            console.log("Conexión a la base de datos exitosa");
        } catch (err) {
            console.log("Esperando conexion con la base de datos...");
            //reintentar cada 2 segundos
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
};