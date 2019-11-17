/**
|--------------------------------------------------
| Data Field Model
| 2019 Dana Simmons
|--------------------------------------------------
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Field = sequelize.define('field', {
  name: Sequelize.STRING,
  visible: Sequelize.BOOLEAN,
  order: Sequelize.INTEGER,
});

Field.visible_fields_by_order = ( ) => {
  let sorted_fields = Fields.findAll( { 
                                      where: { 
                                        visible: true 
                                      }, 
                                      order : 
                                      ['order']
                                    });
  return sorted_fields;
}

module.exports = Field;
