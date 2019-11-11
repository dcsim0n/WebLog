/**
|--------------------------------------------------
| Log Settings Model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('package');
const sequelize = require('../util/database');

const Setting = sequelize.define('setting', {
    id: { type: Sequelize.INTEGER , autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING },
    value: { type: Sequelize.STRING }
});


module.exports = Setting;