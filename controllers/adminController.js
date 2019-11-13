/**
|--------------------------------------------------
| Administer settings, users, and contact fields
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Setting = require('../models/setting');
const Field = require('../models/field');
const FieldType = require('../models/field-type');
const ContactField = require('../models/contact-field');

// GET /admin
exports.adminPage = function(req, res, next) {
  let fields
  let fieldTypes
  Field.findAll({include: [ {model: FieldType} ]})
  .then( f => {
    fields = f
    return FieldType.findAll();
  })
  .then( types =>{
    fieldTypes = types
    return Setting.findAll();
  })
  .then( settings =>{
    console.log('fields[0]', fields[1])
    res.render('admin', { 
      title: 'Admin Settings',
      fields,
      fieldTypes,
      settings  
    });
  })
  .catch( err =>{
    console.log( err )
  })
}

// POST /field
exports.createField = ( req, res, next ) =>{
  const field = req.body
  console.log("Creating field: ", field);

  Field.create(field)
  .then( field =>{
    res.redirect('/admin');
  })
}