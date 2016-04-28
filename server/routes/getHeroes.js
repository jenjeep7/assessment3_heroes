var express = require('express');
var router = express.Router();
var Heroes = require('../../Heroes.js');
var path = require('path');

router.get('/all', function(request, response){
  Heroes.find({}, function(err, heroes){
    if(err){
      console.log('error receiving from DB');
      response.sendStatus(500);
    } else {
    console.log('Heroes received');
    response.send(heroes);
  }
  });
});




module.exports = router;
