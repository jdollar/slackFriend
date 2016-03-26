module.exports = function(url) {
	'use strict'
	var WebSocket = require('ws')
	var ws = new WebSocket(url)

	var messageId = 1
	
	ws.on('open', function() {
		console.log('connected')
	})

	ws.on('close', function() {
		console.log('disconnected')
	})

	ws.sendSimpleMessage = function(channelId, message) {
		ws.send('{"id": ' + messageId + ', "type": "message", "channel": "' + channelId + '", "text": "' + message + '"}')
		messageId += 1
	}

	return ws
}
