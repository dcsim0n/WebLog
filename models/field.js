/**
|--------------------------------------------------
| Data Field Model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Contact = require('./contact');
const ContactField = require('./contact-feild');

const Field = sequelize.define('field', {
  id: { type: Sequelize.INTEGER , autoIncrement: true, allowNull: false, primaryKey: true },
  name: Sequelize.STRING,
  type: Sequelize.STRING
})

Field.belongsToMany( Contact, {
  through: 'ContactField'
})

module.exports = Field;
