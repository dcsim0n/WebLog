/**
|--------------------------------------------------
| Field Model
|--------------------------------------------------
*/

const Sequelize = require('sequeilize');

const sequelize = require('../util/database');

const Field = squelize.define('field', {
  id: { type: Sequelize.INTEGER , autoIncrement: true, allowNull: false, primaryKey: true },
  name: { type: Sequelize.STRING , allowNull: false }
})