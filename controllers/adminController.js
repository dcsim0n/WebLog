/**
|--------------------------------------------------
| admin Controller
|--------------------------------------------------
*/

const Setting = require('../models/setting');

exports.adminPage = function(req, res, next) {
  res.render('admin', { title: 'Express' });
}