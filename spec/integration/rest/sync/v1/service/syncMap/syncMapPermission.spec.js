'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('SyncMapPermission', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions('identity').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var mapSid = 'MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://sync.twilio.com/v1/Services/${serviceSid}/Maps/${mapSid}/Permissions/${identity}`;

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
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'map_sid': 'MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'identity',
          'read': true,
          'write': true,
          'manage': true,
          'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions/identity'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions('identity').fetch();
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

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions('identity').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var mapSid = 'MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://sync.twilio.com/v1/Services/${serviceSid}/Maps/${mapSid}/Permissions/${identity}`;

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

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions('identity').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'permissions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'map_sid': 'MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'identity',
                  'read': true,
                  'write': true,
                  'manage': true,
                  'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions/identity'
              }
          ],
          'meta': {
              'first_page_url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0',
              'key': 'permissions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .syncMapPermissions.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'permissions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'map_sid': 'MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'identity',
                  'read': true,
                  'write': true,
                  'manage': true,
                  'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions/identity'
              }
          ],
          'meta': {
              'first_page_url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0',
              'key': 'permissions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .syncMapPermissions.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://sync.twilio.com/v1/Services/${serviceSid}/Maps/${mapSid}/Permissions',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'permissions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'map_sid': 'MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'identity',
                  'read': true,
                  'write': true,
                  'manage': true,
                  'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions/identity'
              }
          ],
          'meta': {
              'first_page_url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0',
              'key': 'permissions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .syncMapPermissions.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var mapSid = 'MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://sync.twilio.com/v1/Services/${serviceSid}/Maps/${mapSid}/Permissions`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'permissions': [],
          'meta': {
              'first_page_url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0',
              'key': 'permissions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions.list();
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
          'permissions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'map_sid': 'MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'identity',
                  'read': true,
                  'write': true,
                  'manage': true,
                  'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions/identity'
              }
          ],
          'meta': {
              'first_page_url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0',
              'key': 'permissions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/sidOrUniqueName/Permissions?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions.list();
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

      var opts = {read: true, write: true, manage: true};
      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions('identity').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var mapSid = 'MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://sync.twilio.com/v1/Services/${serviceSid}/Maps/${mapSid}/Permissions/${identity}`;

      var values = {
        Read: serialize.bool(true),
        Write: serialize.bool(true),
        Manage: serialize.bool(true),
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'map_sid': 'MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'identity',
          'read': true,
          'write': true,
          'manage': true,
          'url': 'https://sync.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Maps/MPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions/identity'
      };

      holodeck.mock(new Response(200, body));

      var opts = {read: true, write: true, manage: true};
      var promise = client.sync.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMaps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .syncMapPermissions('identity').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
