var router = require('express').Router();
var path = require('path');

var Heroes = require('../../Heroes.js');


router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});


module.exports = router;
