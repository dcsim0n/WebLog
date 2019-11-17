
/**
|--------------------------------------------------
| Contact model
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Contact = sequelize.define('contact', {
  date: { type: Sequelize.STRING },
  operator: { type: Sequelize.STRING },
  dx_call: { type: Sequelize.STRING }
  
})

module.exports = Contact;