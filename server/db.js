const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    dialect: 'postgres',        
  });

module.exports = {sequelize}