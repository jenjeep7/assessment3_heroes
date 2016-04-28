var express= require('express');
var router = express.Router();
var Heroes = require('../../Heroes');
var path = require('path');

router.post('/new', function(request, response){
  var hero = new Heroes(request.body);
  hero.save(function(err){
    if(err) {console.log('error', err);
  } else {
    response.sendStatus(200);
    console.log("New Hero Created');");
  }
});
});




module.exports = router;
