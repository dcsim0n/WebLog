/**
|--------------------------------------------------
| Field Data Type model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const FieldType = sequelize.define('field_type',{
  type: {type: Sequelize.STRING }
})

module.exports = FieldType;