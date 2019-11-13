/**
|--------------------------------------------------
| ContactField join model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Field = require('./field');
const Contact = require('./contact');


const ContactField = sequelize.define('contactfield',{
  value: { type: Sequelize.STRING }
})

ContactField.belongsTo( Field );
ContactField.belongsTo( Contact );

Contact.belongsToMany( Field, { through: ContactField });
Field.belongsToMany( Contact, { through: ContactField });

module.exports = ContactField;
