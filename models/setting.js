/**
|--------------------------------------------------
| Log Settings Model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Setting = sequelize.define('setting', {
    name: { type: Sequelize.STRING },
    value: { type: Sequelize.STRING }
});


module.exports = Setting;