var request = require('request'),
	util 	= require('../util');

module.exports = function (param) {
	var	channel = param.channel;
  var endpoint= 'http://charity-matcher.devnxs.net:1234/get_all_events';
	
  console.log(param);
	request(endpoint, function (err, response, body) {
		var info = [];

		if (!err && response.statusCode === 200) {
			body = JSON.parse(body);

      body.events.forEach(function(event) {
        info.push('Event: ' + event.name);
        info.push('Location: ' + event.location);
        info.push('Description: ' + event.description);
        info.push('Date: ' + event.date);
        /*
        info.push('Attendees: ');
        event.attendees.forEach(function(a) {
          info.push(a + '\n');
        }
        */
      });
		}
		else {
      console.log(err);
      console.log(response);
			info = ['No events found!'];
		}

		util.postMessage(channel, info.join('\n\n'));
	});

};
