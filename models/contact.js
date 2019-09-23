
/**
|--------------------------------------------------
| Contact model
|--------------------------------------------------
*/

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Contact = sequelize.define('contact', {
  id: { type: Sequelize.INTEGER , autoIncrement: true, allowNull: false, primaryKey: true },
  date: { type: Sequelize.STRING },
  freq: { type: Sequelize.STRING },
  operator: { type: Sequelize.STRING },
  dx: { type: Sequelize.STRING },
  rst: { type: Sequelize.STRING }
})

module.exports = Contact