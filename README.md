# slackFriend
Simple slack bot to plus plus my username all of the time



How to use:


1. npm install --dev

2. gulp init //generates userProps/{username}.json

3. update userProps/{username}.json to correct values
* application token
* team name for the slack channel the bot will be used
* username for the person you want plus plused all of the time

4. gulp //creates a dest dir with the correct config values and javascipt

5. node dest/slackFriend.js
