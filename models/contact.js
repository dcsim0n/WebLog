
/**
|--------------------------------------------------
| Contact model
|--------------------------------------------------
*/
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
  fs.writeFile(p, JSON.stringify(data), cb );
}
module.exports = class Contact {
  
  constructor( args ){
    Object.keys( args ).forEach( key => {
      this[key] = args[key];
    });
  }

  save( ){
    readContacts( ( contacts )=>{
      const row = { id: contacts.length + 1 , date: this.date, freq: this.freq, operator: this.operator, dx: this.dx, rst: this.rst }
      contacts.push(row);
      writeContacts( contacts, ( err )=>{
        console.log(err);
      } );
    })
  }

  static allContacts(cb) {
    console.log("Getting contacts..")
    readContacts( data =>{
      cb ( data.map( row => new Contact( row )))
    } );
  }
}
