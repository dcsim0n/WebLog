/**
|--------------------------------------------------
| Administer settings, users, and contact fields
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Setting = require('../models/setting');
const Field = require('../models/field');
const FieldType = require('../models/field-type');

exports.adminPage = function(req, res, next) {
  let fields
  let fieldTypes
  Field.findAll()
  .then( f => {
    fields = f
    return FieldType.findAll();
  })
  .then( types =>{
    fieldTypes = types
    return Setting.findAll();
  })
  .then( settings =>{
    
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