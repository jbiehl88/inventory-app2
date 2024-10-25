const { Sequelize, DataTypes, Model } = require('sequelize');

const path = require('path');
require('dotenv').config();

const sequelize = new Sequelize(process.env.REACT_APP_DB_NAME, process.env.REACT_APP_DB_USER, process.env.REACT_APP_DB_PASS, {
    host: process.env.REACT_APP_DB_HOST,
    port: process.env.REACT_APP_DB_PORT,
    dialect: 'postgres',        
  });

module.exports = {sequelize}