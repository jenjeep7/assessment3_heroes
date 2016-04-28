var express = require('express');
var router = express.Router();
var Heroes = require('../../Heroes');
var path = require('path');


router.delete('/delete:id', function(request, response){
  var id = request.params.id;
  Heroes.findOneAndRemove({_id: id}).exec(function(err, hero){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else{
      console.log("The hero is gone!");
      response.sendStatus(200);
    }
  });
});



module.exports = router;
