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
const FieldType = require('./field-type')

const ContactField = sequelize.define('contact_field',{
  value: { type: Sequelize.STRING }
})

FieldType.hasMany( Field );
Field.belongsTo( FieldType );

ContactField.belongsTo( Field );
ContactField.belongsTo( Contact );

Contact.belongsToMany( Field, { through: ContactField });
Field.belongsToMany( Contact, { through: ContactField });

module.exports = ContactField;
