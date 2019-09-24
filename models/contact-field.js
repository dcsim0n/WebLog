/**
|--------------------------------------------------
| Contact - Field modle
|--------------------------------------------------
*/


const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ContactField = sequelize.define('contactField', {
  id: { type: Sequelize.INTEGER , primaryKey: true, allowNull: false },
  value: { type: Sequelize.STRING , allowNull: true }
});