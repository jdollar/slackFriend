(function() {
	'use strict'
	var $https = require('https')
	var fs = require('fs')
	var destFolder = __dirname + '/dest'
	var config = JSON.parse(fs.readFileSync(destFolder + '/config/config.json', 'utf-8'))
	var messagePosted = false

	$https.get('https://' + config.teamName + '.slack.com/api/rtm.start?token=' + config.token, (res) => {
		var data = ''

		res.on('data', function(dataChunk) {
			data += dataChunk
		})

		res.on('end', function() {
			var rtmStartObject = JSON.parse(data)
			var channels = rtmStartObject.channels

			var ws = require(destFolder + '/webSocketService.js')(rtmStartObject.url)
			
			ws.on('message', function(data, flags) {
				console.log(data)
				for (var channel of channels) {
					if (channel.name === 'general' && messagePosted === false) {
						ws.sendSimpleMessage(channel.id, 'test')
						messagePosted = true
					}
				}
			})
		})
	})

})()
