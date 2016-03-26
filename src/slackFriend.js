(function() {
	var $https = require('https')
	var fs = require('fs')
	var config = JSON.parse(fs.readFileSync(__dirname + '/config/config.json', 'utf-8'))
	var messagePosted = false

	$https.get('https://' + config.teamName + '.slack.com/api/rtm.start?token=' + config.token, (res) => {
		var data = ''

		res.on('data', function(dataChunk) {
			data += dataChunk
		})

		res.on('end', function() {
			var rtmStartObject = JSON.parse(data)
			var channels = rtmStartObject.channels

			var WebSocket = require('ws')
			var ws = new WebSocket(rtmStartObject.url)

			ws.on('open', function() {
				console.log('connected')
			})

			ws.on('close', function() {
				console.log('disconnected')
			})

			ws.on('message', function(data, flags) {
				console.log(data)
				for (var channel of channels) {
					if (channel.name === 'general' && messagePosted === false) {
						ws.send('{"id": 1, "type": "message", "channel": "' + channel.id + '", "text": "test"}')
						messagePosted = true
					}
				}
			})
		})
	})

})()
