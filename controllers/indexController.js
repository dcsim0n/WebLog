/**
|--------------------------------------------------
| index controller
|--------------------------------------------------
*/

const Contact = require('../models/contact');
const Field = require('../models/field');
const ContactField = require('../models/field');


exports.indexPage = function(req, res, next) {
  
  let fields;

  Field.findAll()
  .then( f =>{
    fields = f
    return Contact.findAll({include: [{ model: ContactField}] })
  })
  Contact.findAll().then( ( contacts ) => {
    
    res.render('index', { 
      title: 'Main Log',
      contacts,
      fields,
    });

  });
}