// server/api/example.js
import queryDatabase from '../services/dbService';

export default defineEventHandler(async (event) => {
    console.error("entra")
    try {
        const operationsDoc = `
      SELECT * FROM test;
    `;

        const datos = await queryDatabase(operationsDoc);
        console.error("datos", datos)
        return datos
    } catch (error) {
        console.log('Error executing query:', error);
        return { success: false, error: error.message };
    }
});
