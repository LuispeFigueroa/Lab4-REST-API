import express from "express";
import { pool } from "./db.js";
import { validateData } from "./model.js";

const router = express.Router();


// GET todos 
router.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM fighters");
    res.json(result.rows);
});


// GET por id
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const result = await pool.query(
        "SELECT * FROM fighters WHERE id=$1",
        [id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Fighter not found" });
    }

    res.json(result.rows[0]);
});


// POST
router.post("/", async (req, res) => {
    const error = validateData(req.body);
    if (error) return res.status(400).json({ error });

    const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

    const result = await pool.query(
        `INSERT INTO fighters 
    (campo1, campo2, campo3, campo4, campo5, campo6) 
    VALUES ($1,$2,$3,$4,$5,$6) 
    RETURNING *`,
        [campo1, campo2, campo3, campo4, campo5, campo6]
    );

    res.status(201).json(result.rows[0]);
});


// PUT
router.put("/:id", async (req, res) => {
    const { id } = req.params;

    const error = validateData(req.body);
    if (error) return res.status(400).json({ error });

    const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

    const result = await pool.query(
        `UPDATE fighters 
     SET campo1=$1, campo2=$2, campo3=$3, 
         campo4=$4, campo5=$5, campo6=$6 
     WHERE id=$7 
     RETURNING *`,
        [campo1, campo2, campo3, campo4, campo5, campo6, id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Fighter not found" });
    }

    res.json(result.rows[0]);
});


// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const result = await pool.query(
        "DELETE FROM fighters WHERE id=$1 RETURNING *",
        [id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Fighter not found" });
    }

    res.status(204).send();
});

export default router;