// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-proud-field-a2wip8t3.eu-central-1.aws.neon.tech', // Cambia esto si estás usando un servidor remoto
  database: 'neondb',
  password: 'r1dcPuekU9pg',
  port: 5432, // Cambia el puerto si es diferente
  ssl: {
    rejectUnauthorized: false, // Permite conexiones incluso si el certificado es autofirmado o no válido
  },
});

if (pool) {
  console.log('Conexión a la base de datos exitosa');
}

module.exports = pool;
