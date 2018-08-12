var express = require('express');
var router = express.Router();
var request = require('request');

function toXmlMessage(content) {
  return '<Message>' + content + '</Message>';
}

function wrapInResponseTemplate(start, end, distance, messages) {
  var response = '<?xml version="1.0" encoding="UTF-8" ?><Response>'
  response += toXmlMessage(
    "Start: " + start + "&#10;" + "End: " + end + "&#10;" + "Distance: " + distance +"&#10;"
  );
  for(var m in messages) {
    response += toXmlMessage(messages[m]);
  } 
  return response += '</Response>';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'sms-nav' });
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
    var start = body.body.routes[0].legs[0].start_address;
    var end = body.body.routes[0].legs[0].end_address;
    var dist = body.body.routes[0].legs[0].distance.text;

    var directions = body.body.routes[0].legs[0].steps;

    var formatted = [];

    for(var step in directions) {
      var stepDist = directions[step].distance.text;
      var stepInst = directions[step].html_instructions;

      var strippedHtml = stepInst.replace(/<div style=\"font-size:0.9em\">/g, ". ").replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, " ");
      
      formatted.push(step + '.' + strippedHtml + ' - ' + stepDist);
    }
    
    console.log(formatted)

    response.setHeader("Content-Type", "application/xm"); 

    var xml = wrapInResponseTemplate(start, end, dist, formatted)
    console.log(xml);

    response.send(xml);
  });

});


module.exports = router;
