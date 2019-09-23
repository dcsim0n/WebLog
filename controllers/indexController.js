/**
|--------------------------------------------------
| index controller
|--------------------------------------------------
*/

const Contact = require('../models/contact');

exports.indexPage = function(req, res, next) {

  Contact.findAll().then( ( contacts ) => {
    
    res.render('index', { title: 'Main Log', contacts });

  });
}