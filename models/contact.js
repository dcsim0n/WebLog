
/**
|--------------------------------------------------
| Contact model
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const ContactField = require('./contact-feild');
const Field = require('./field');

const Contact = sequelize.define('contact', {
  id: { type: Sequelize.INTEGER , autoIncrement: true, allowNull: false, primaryKey: true },
  date: { type: Sequelize.STRING },
  operator: { type: Sequelize.STRING },
  dx_call: { type: Sequelize.STRING }
})

Contact.belongsToMany( Field, {
  through: 'ContactField'
})
module.exports = Contact;