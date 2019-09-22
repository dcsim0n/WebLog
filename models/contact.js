const fs = require('fs');

const path = require('path');

const p = path.join( path.dirname(process.mainModule.filename), "contacts.json" );
function readContacts( cb ){
  fs.readFile(p , (err, data) =>{
    if(!err) {
      parsedData = JSON.parse( data );
      cb( parsedData );
    }else{
      throw err
    }
  })
}

function writeContacts( data, cb ){
  fs.writeFile(p, data, cb );
}
module.exports = class Contact {
  
  constructor( args ){
    Object.keys( args ).forEach( key => {
      this[key] = args[key];
    });
  }

  save( ){
    row = { id: this.id, date: this.date, freq: this.freq, operator: this.operator, dx: this.dx, rst: this.rst }
    readContacts( ( contacts )=>{
      contacts.push(row);
      writeContacts( contacts );
    })
  }

  static allContacts(cb) {
    console.log("Getting contacts..")
    readContacts( data =>{
      cb ( data.map( row => new Contact( row )))
    } );
  }
}
