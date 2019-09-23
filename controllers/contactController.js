/**
|--------------------------------------------------
| Contact controller
|--------------------------------------------------
*/

const Contact = require('../models/contact');

exports.newContact = function ( req, resp, next ){
    const newContact = Contact.create( req.body );
    
    resp.redirect('/');
}