# slackFriend
Simple slack bot to plus plus my username all of the time



How to use:

```
npm install --dev
gulp init //generates userProps/{username}.json
update userProps/{username}.json to correct values
* application token
* team name for the slack channel the bot will be used
* username for the person you want plus plused all of the time
gulp //creates a dest dir with the correct config values and javascipt
node dest/slackFriend.js
```