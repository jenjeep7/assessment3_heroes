var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var app = express();
var bodyParser = require('body-parser');

//routes

var createHero = require('./routes/createHero');
var getHeroes = require('./routes/getHeroes');
var deleteHero = require('./routes/deleteHero');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/createHero', createHero);
app.use('/getHeroes', getHeroes);
app.use('/deleteHero', deleteHero);
//Database
var mongoURI = 'mongodb://localhost/heroes';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});


app.use('/', index);

//Run Server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
