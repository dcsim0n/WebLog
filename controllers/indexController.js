/**
|--------------------------------------------------
| index controller
|--------------------------------------------------
*/

const Contact = require('../models/contact');

exports.indexPage = function(req, res, next) {

  Contact.allContacts( ( contacts ) => {
    
    res.render('index', { title: 'Main Log', contacts });

  });
}