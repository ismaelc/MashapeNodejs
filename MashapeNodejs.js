var querystring = require('querystring');
var https = require('https');

// Set up Mashape stuff
var options = {
  host: 'ismaelc-bitly.p.mashape.com',
  port: 443,
  path: '/v3/shorten/',
  method: 'POST', // Using POST instead of GET, to please post_data below
  headers: {
		'Content-Type': 'application/json',
		'X-Mashape-Authorization': '<GET YOUR MASHAPE KEY IN YOUR MASHAPE DASHBOARD>''
  }
};

// Set up bitly query parameters
var post_data = querystring.stringify({
	'login' : 'ismaelc',
	'longurl':'http://www.mashape.com/',
	'apikey': '<insert your Bitly apikey here.  Refer to Readme for details>'
});

// Set up the request
var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});

// Fire!
req.write(post_data);
req.end();

req.on('error', function(e) {
  console.error(e);
});