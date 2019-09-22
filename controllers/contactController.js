/**
|--------------------------------------------------
| Contact controller
|--------------------------------------------------
*/

const Contact = require('../models/contact');

exports.newContact = function ( req, resp, next ){
    const newContact = new Contact( req.body )
    newContact.save();
    resp.redirect('/');
}