var express = require('express');
var router = express.Router();
var request = require('request');

function toXmlMessage(content) {
  return '<Message>' + escapeXml(content) + '</Message>';
}

function wrapInResponseTemplate(start, end, distance, messages) {
  var response = '<?xml version="1.0" encoding="UTF-8" ?><Response>';
  response += toXmlMessage(
    "Start: " + escapeXml(start) + "\n" + "End: " + escapeXml(end) + "\n" + "Distance: " + distance +"\n"
  );
  for(var m in messages) {
    response += toXmlMessage(messages[m]);
  } 
  return response += '</Response>';
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
      switch (c) {
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '&': return '&amp;';
          case '\'': return '&apos;';
          case '"': return '&quot;';
      }
  });
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

  request.get({ url: baseUrl + queryString, json:true }, function(error, res, body) {  
    
    if(error) {
      return response.send('Sorry, there was an error retrieving the navigation instructions. Please try again later.');
    }

    if(body.status == 'NOT_FOUND') {
      return response.send('Sorry, a route couldn\'t be determined. Please check the origin and destination.');
    }
    
    var start = body.routes[0].legs[0].start_address;
    var end = body.routes[0].legs[0].end_address;
    var dist = body.routes[0].legs[0].distance.text;

    var directions = body.routes[0].legs[0].steps;

    var formatted = [];

    for(var step in directions) {
      var stepDist = directions[step].distance.text;
      var stepInst = directions[step].html_instructions;

      var strippedHtml = stepInst.replace(/<div style=\"font-size:0.9em\">/g, ". ").replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, " ");
      var stepNumber = Number(step) + 1;
      formatted.push(stepNumber + '. ' + strippedHtml + ' - ' + stepDist);
    }
    
    response.setHeader("Content-Type", "application/xml"); 

    var xml = wrapInResponseTemplate(start, end, dist, formatted);
    console.log(xml);

    response.send(xml);
  });

});


module.exports = router;
