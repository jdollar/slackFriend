(function() {
  'use strict'
  var Nook = require('nock'),
      Sinon = require('sinon'),
      assert = require('assert')

  var webSocketService
  
  describe('webSocketServiceTest', function() {
  
    beforeEach(function() {
      webSocketService = require('../lib/webSocketService')('https://www.test.com')
    })
  
    describe('open', function() {
      it('should log connected', function() {
        shouldLogMessage(webSocketService.onopen, 'connected')
      })
    })

    describe('close', function() {
      it('should log disconnected', function() {
        shouldLogMessage(webSocketService.onclose, 'disconnected')
      })
    })

    describe('sendSimpleMessage', function() {

      before(function() {
      })

      after(function() {
      })
      
      it('send message proper values', function() {
        var spy = Sinon.stub(webSocketService, 'send', function(jsonString) {})
        var expectedChannel = 'channel'
        var expectedMessage = 'message'
        var expectedJsonString = '{"id": 1, "type": "message", "channel": "' + expectedChannel + '", "text": "' + expectedMessage + '"}'

        webSocketService.sendSimpleMessage(expectedChannel, expectedMessage)  
        assert(spy.withArgs(expectedJsonString).calledOnce)
      })

      it('send message blank values', function() {
        var spy = Sinon.stub(webSocketService, 'send', function(jsonString) {})
        var expectedChannel = ''
        var expectedMessage = ''
        var expectedJsonString = '{"id": 1, "type": "message", "channel": "' + expectedChannel + '", "text": "' + expectedMessage + '"}'

        webSocketService.sendSimpleMessage(expectedChannel, expectedMessage)  
        assert(spy.withArgs(expectedJsonString).calledOnce)
      })

      it('send message undefined values', function() {
        var spy = Sinon.stub(webSocketService, 'send', function(jsonString) {})
        var expectedChannel
        var expectedMessage
        var expectedJsonString = '{"id": 1, "type": "message", "channel": "' + expectedChannel + '", "text": "' + expectedMessage + '"}'

        webSocketService.sendSimpleMessage(expectedChannel, expectedMessage)  
        assert(spy.withArgs(expectedJsonString).calledOnce)
      })
    })

    function shouldLogMessage(functionCall, message) {
      var oldLog = console.log
      console.log = function(log) {
        assert.equal(log, message)
      }

      functionCall()

      console.log = oldLog
    }
  })
})()
