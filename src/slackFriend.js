var $https = require('https')
var fs = require('fs')
var config = fs.readFileSync(__dirname + '/config/config.json')

$https.get('https://' + config.teamName + '.slack.com/api/rtm.start?token=' + config.token, function(res) {
	console.log(res)})
