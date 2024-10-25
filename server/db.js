const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');


const sequelize = new Sequelize(process.env.REACT_APP_DB_NAME, process.env.REACT_APP_DB_USER, process.env.REACT_APP_DB_PASS, {
    host: process.env.REACT_APP_DB_HOST,
    dialect: 'postgres',        
  });

module.exports = {sequelize}