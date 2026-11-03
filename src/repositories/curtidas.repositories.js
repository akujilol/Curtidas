import knex from "knex";
import { pool } from "../database/db.js";

class CurtidasRepository {
    async getAll(){
        const res = await knex.query("SELECT * FROM curtidas")
        return res.rows
    }

    async getById(id) {
        const res =await pool.query("SELECT * FROM curtidas WHERE id=$1", [id]);
        return res.rows[0]
    }

    async create(dados)
}
