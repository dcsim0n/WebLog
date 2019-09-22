const fs = require('fs');
const SCHEMA = require('../schema.json');

exports = class Contact {
  
  constructor( args ){
    Object.keys( args ).forEach( key => {
      this[key] = args[key];
    });
  }

  static allContacts(cb) {
    fs.readFile('../contact.json', (err, data) =>{
      if(!err) {
        cb( data )
      }
    })
  }
}
