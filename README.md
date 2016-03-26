# SlackFriend
Simple slack bot to plus plus my username all of the time

[![Build Status](https://travis-ci.org/jdollar/slackFriend.svg?branch=master)](https://travis-ci.org/jdollar/slackFriend)

####How to use:

```
npm install
gulp init //generates userProps/{username}.json
update userProps/{username}.json to correct values
* application token
* team name for the slack channel the bot will be used
* username for the person you want plus plused all of the time
gulp //creates a dest dir with the correct config values and javascipt. Also runs unit tests
npm start
```

#### Unit test

All test files are located under the test directory and run through the normal gulp command

```
npm install
npm test OR gulp test
```

#### Contributing
Standard javascript style should be followed:

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
