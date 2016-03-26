var $https = require('https')

$https.get("https://drunkcraft.slack.com/api/rtm.start?token=", function(res) {console.log(res)})
