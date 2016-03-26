(function() {
	'use strict'
	var Nook = require('nock'),
			Sinon = require('sinon'),
			Mockery = require('mockery'),
			assert = require('assert')

	var webSocketService
	
	describe('webSocketServiceTest', function() {
	
		before(function() {
			//Mockery.enable()
		})
	
		beforeEach(function() {
			webSocketService = require('../lib/webSocketService')('https://www.test.com')
		})
	
		after(function() {
			//Mockery.disable()
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
