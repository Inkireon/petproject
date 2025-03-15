const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables

console.log(process.env);

module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "postgres",
  PASSWORD: process.env.DB_PASSWORD || "123456",
  DB: process.env.DB_NAME || "RASULATYRAUSKIY",
  dialect: process.env.DB_DIALECT || "postgres", // Ensure this is explicitly set
  port: process.env.DB_PORT || 5432,
  pool: {
    max: parseInt(process.env.POOL_MAX) || 5,
    min: parseInt(process.env.POOL_MIN) || 0,
    acquire: parseInt(process.env.POOL_ACQUIRE) || 30000,
    idle: parseInt(process.env.POOL_IDLE) || 10000
  }
};
