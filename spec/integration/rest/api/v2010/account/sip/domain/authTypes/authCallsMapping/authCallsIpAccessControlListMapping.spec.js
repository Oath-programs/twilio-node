'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require(
    '../../../../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require(
    '../../../../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('AuthCallsIpAccessControlListMapping', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {ipAccessControlListSid: 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var domainSid = 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings.json`;

      var values = {IpAccessControlListSid: 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Thu, 30 Jul 2015 20:00:00 +0000',
          'date_updated': 'Thu, 30 Jul 2015 20:00:00 +0000',
          'friendly_name': 'friendly_name',
          'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {ipAccessControlListSid: 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'end': 0,
          'previous_page_uri': null,
          'contents': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'date_updated': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'page_size': 50,
          'start': 0,
          'next_page_uri': null,
          'page': 0
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .auth
                      .calls
                      .ipAccessControlListMappings.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'end': 0,
          'previous_page_uri': null,
          'contents': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'date_updated': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'page_size': 50,
          'start': 0,
          'next_page_uri': null,
          'page': 0
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .auth
                      .calls
                      .ipAccessControlListMappings.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'end': 0,
          'previous_page_uri': null,
          'contents': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'date_updated': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'page_size': 50,
          'start': 0,
          'next_page_uri': null,
          'page': 0
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .auth
                      .calls
                      .ipAccessControlListMappings.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var domainSid = 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'end': 0,
          'previous_page_uri': null,
          'contents': [],
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'page_size': 50,
          'start': 0,
          'next_page_uri': null,
          'page': 0
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'end': 0,
          'previous_page_uri': null,
          'contents': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'date_updated': 'Thu, 30 Jul 2015 20:00:00 +0000',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Auth/Calls/IpAccessControlListMappings.json?PageSize=50&Page=0',
          'page_size': 50,
          'start': 0,
          'next_page_uri': null,
          'page': 0
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var domainSid = 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Thu, 30 Jul 2015 20:00:00 +0000',
          'date_updated': 'Thu, 30 Jul 2015 20:00:00 +0000',
          'friendly_name': 'friendly_name',
          'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var domainSid = 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings/${sid}.json`;

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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .auth
                                    .calls
                                    .ipAccessControlListMappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
