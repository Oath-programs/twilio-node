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


var client;
var holodeck;

describe('Field', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields('UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Fields/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields/UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'date_updated': '2015-07-30T20:00:00Z',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'field_type': 'field_type'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields('UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'fields': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields/UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type': 'field_type'
              }
          ],
          'meta': {
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'key': 'fields',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          }
      };
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fields.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'fields': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields/UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type': 'field_type'
              }
          ],
          'meta': {
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'key': 'fields',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          }
      };
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fields.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Fields',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'fields': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields/UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type': 'field_type'
              }
          ],
          'meta': {
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'key': 'fields',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          }
      };
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fields.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Fields`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'fields': [],
          'meta': {
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'key': 'fields',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields.list();
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
          'fields': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields/UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type': 'field_type'
              }
          ],
          'meta': {
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields?PageSize=50&Page=0',
              'key': 'fields',
              'next_page_url': null,
              'previous_page_url': null,
              'page_size': 50
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields.list();
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

      var opts = {fieldType: 'field_type', uniqueName: 'unique_name'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Fields`;

      var values = {FieldType: 'field_type', UniqueName: 'unique_name', };
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
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Fields/UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'date_updated': '2015-07-30T20:00:00Z',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'field_type': 'field_type'
      };

      holodeck.mock(new Response(201, body));

      var opts = {fieldType: 'field_type', uniqueName: 'unique_name'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields.create(opts);
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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields('UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Fields/${sid}`;

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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fields('UEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
