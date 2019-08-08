var mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data
// var Faker = require('faker');


// For Example

Fleet.create([{
      name: 'Avanza 1',
      license_number: "B 1213 ABC"
    },
    {
      name: 'Avanza 2',
      license_number: "B 1213 FSR"
    }, {
      name: 'Avanza 3',
      license_number: "B 1213 RFT"
    }
  ])

  .then(() => {
    console.log("Seed compconste!")
    mongoose.connection.close();
  });

// be sure to close the connection once the queries are done