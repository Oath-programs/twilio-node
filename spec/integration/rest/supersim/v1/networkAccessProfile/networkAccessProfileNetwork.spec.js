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

describe('NetworkAccessProfileNetwork', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0',
              'key': 'networks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0'
          },
          'networks': [
              {
                  'sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'AT&T',
                  'iso_country': 'us',
                  'identifiers': [
                      {
                          'mcc': '310',
                          'mnc': '410'
                      }
                  ],
                  'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks/HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .networks.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0',
              'key': 'networks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0'
          },
          'networks': [
              {
                  'sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'AT&T',
                  'iso_country': 'us',
                  'identifiers': [
                      {
                          'mcc': '310',
                          'mnc': '410'
                      }
                  ],
                  'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks/HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .networks.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/NetworkAccessProfiles/${networkAccessProfileSid}/Networks',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0',
              'key': 'networks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0'
          },
          'networks': [
              {
                  'sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'AT&T',
                  'iso_country': 'us',
                  'identifiers': [
                      {
                          'mcc': '310',
                          'mnc': '410'
                      }
                  ],
                  'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks/HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .networks.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var networkAccessProfileSid = 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/NetworkAccessProfiles/${networkAccessProfileSid}/Networks`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0',
              'key': 'networks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks?PageSize=50&Page=0'
          },
          'networks': [
              {
                  'sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'AT&T',
                  'iso_country': 'us',
                  'identifiers': [
                      {
                          'mcc': '310',
                          'mnc': '410'
                      }
                  ],
                  'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks/HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {network: 'HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var networkAccessProfileSid = 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/NetworkAccessProfiles/${networkAccessProfileSid}/Networks`;

      var values = {Network: 'HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'AT&T',
          'iso_country': 'us',
          'identifiers': [
              {
                  'mcc': '310',
                  'mnc': '410'
              }
          ],
          'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks/HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {network: 'HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks('HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var networkAccessProfileSid = 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/NetworkAccessProfiles/${networkAccessProfileSid}/Networks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks('HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks('HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var networkAccessProfileSid = 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/NetworkAccessProfiles/${networkAccessProfileSid}/Networks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'AT&T',
          'iso_country': 'us',
          'identifiers': [
              {
                  'mcc': '310',
                  'mnc': '410'
              }
          ],
          'url': 'https://supersim.twilio.com/v1/NetworkAccessProfiles/HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Networks/HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.networkAccessProfiles('HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .networks('HWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
