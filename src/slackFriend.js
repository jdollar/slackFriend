(function() {
	var $https = require('https')
	var fs = require('fs')
	var config = JSON.parse(fs.readFileSync(__dirname + '/config/config.json', 'utf-8'))

	$https.get('https://' + config.teamName + '.slack.com/api/rtm.start?token=' + config.token, function(res) {
		var data = ''

		res.on('data', function(dataChunk) {
			data += dataChunk
		})

		res.on('end', function() {
			var rtmStartObject = JSON.parse(data)
			console.log(rtmStartObject)
		})
	})
})()
