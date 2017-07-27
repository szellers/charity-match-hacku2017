var sync_request = require('sync-request'),
	request = require('request'),
  util 	= require('../util');

module.exports = function (param) {
	var	channel = param.channel;
  var info;

  var slack_endpoint = 'https://slack.com/api/users.list?users:read&token=xoxb-218124337681-nbeJP8gxJtQmx9kmc9NAldta';
  console.log('Endpoint: ' + slack_endpoint);
  var json;
  var result = sync_request('GET', slack_endpoint);
  try {
    json = result.getBody('utf8');
  } catch (ex) {
    console.log(ex);
    info = ['Error connecting to Slack API'];
		util.postMessage(channel, info.join('\n\n'));
    return;
  }
  
  var body = JSON.parse(json);
  var username = '';
  for (var i = 0; i < body.members.length; i++) {
    user = body.members[i];
    if (user.id == param.user) {
      username = user.name;
      break;
    }
  }

  if (username == '') {
    info = ['Could not find user'];
		util.postMessage(channel, info.join('\n\n'));
    return;
  }
  
  var endpoint= 'http://charity-matcher.devnxs.net:1234/get_suggested_events_for_user?username=' + username;
	console.log('Endpoint: ' + endpoint);
  var res = sync_request('GET', endpoint);
  var json;
  try {
    json = res.getBody('utf8');
  } catch (ex) {
    console.log(ex);
		info = ['Error looking up events'];
    util.postMessage(channel, info.join('\n\n'));
    return;
  }

  var body = JSON.parse(json);
  var info = [];
  if (body.events.length == 0) {
    info.push['Sorry, no matching events right now!'];
  } else {
    body.events.forEach(function(event) {
      info.push('Event: ' + event.name);
      info.push('Description: ' + event.description);
      info.push('Link: ' + event.url);
    });
  }
  util.postMessage(channel, info.join('\n\n'));
};
