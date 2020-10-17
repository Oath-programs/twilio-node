'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Recording', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .recordings().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trunkSid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/Recording`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'mode': 'do-not-record',
          'trim': 'do-not-trim',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recording',
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .recordings().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .recordings().update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trunkSid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/Recording`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'mode': 'do-not-record',
          'trim': 'do-not-trim',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recording',
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .recordings().update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
