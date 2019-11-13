/**
|--------------------------------------------------
| Data Field Model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Field = sequelize.define('field', {
  name: Sequelize.STRING,
  type: Sequelize.STRING
})


module.exports = Field;
