const express = require('express');
const mongoose = require('mongoose');
const businessRoute = require('./routes/business.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB');
const app = express();
const port = process.env.PORT || 4000;

path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useNewUrlParser: true
}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});

//MongoDB Atlas connection
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://prasad:<pcshinde>@firstcluster-fxezs.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri,(err,db)=> {
//   useNewUrlParser: true;
// });
// client.connect(err => {
//   const collection = client.db("FirstDatabase").collection("FirstCollection");
//   // perform actions on the collection object
//   client.close();
// });

// msContentScript.connect(url, (err, db) => {
//   var dbo = db.db('databasename');
// })





// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const jwtVerifier = require('express-jwt');
// const secret = 'secret';
// require('dotenv').config();
// const parse = require('mongo-error-parser');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// const config = require(__dirname + '/keys');

// var app = express();

// //connect to mongodb atlas

// mongoose.connect(config.mongoURI,config.mongoCFG, (error) => {
//   if (error) {
// //    console.log(JSON.stringify(error));
//     console.log(error);
//   } else {
//     console.log('connected successfully');
//   }
// });
