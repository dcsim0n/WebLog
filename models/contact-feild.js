/**
|--------------------------------------------------
| ContactField join model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Contact = require('./contact');
const Field = require('./field');

const ContactField = sequelize.define('contact_field',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  field_id: { type: Sequelize.INTEGER },
  contact_id: { type: Sequelize.INTEGER },
  value: { type: Sequelize.STRING }
})

ContactField.belongsTo( Contact );
ContactField.belongsTo( Field );

module.exports = ContactField;
