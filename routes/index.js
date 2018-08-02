var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TextNav' });
});

router.get('/navigate', function(req, response, next) {
  var search = req.query.Body;
  var origin = search.split(" to ")[0];
  var destination = search.split(" to ")[1];

  var baseUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
  var queryString = 'origin=' + origin + '&destination=' + destination + '&key=' + process.env.GOOGLE_API_KEY;
  console.log("origin: " + origin);
  console.log("destination: " + destination);
  console.log("URL: " + baseUrl + queryString);

  request.get({ url: baseUrl + queryString, json:true }, function(res, body) {  
    response.json(body);
  });

});


module.exports = router;
