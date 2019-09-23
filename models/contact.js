
/**
|--------------------------------------------------
| Contact model
|--------------------------------------------------
*/

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Contact = sequelize.define('contact', {
  id: { type: Sequelize.INTEGER , autoIncrement: true, allowNull: false, primaryKey: true }
})

module.exports = Contact