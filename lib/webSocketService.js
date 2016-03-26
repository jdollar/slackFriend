module.exports = function (url) {
	'use strict'
	var WebSocket = require('ws')
	var ws = new WebSocket(url)

	var messageId = 1
	
	ws.on('open', () => { logMessage('connected') })
	ws.on('close', () => { logMessage('disconnected') })

	ws.sendSimpleMessage = function (channelId, message) {
		ws.send('{"id": ' + messageId + ', "type": "message", "channel": "' + channelId + '", "text": "' + message + '"}')
		messageId += 1
	}

	function logMessage (message) {
		console.log(message)
	}

	return ws
}
