// services/dbService.js
import pool from '../db';

export default async function executeQuery(query, params) {
    try {
        const res = await pool.query(query, params);
        return res.rows; // Para PostgreSQL
    } catch (err) {
        console.error('Database query error:', err);
        // throw err; // This line is redundant and should be removed
    }
}
// throw err;