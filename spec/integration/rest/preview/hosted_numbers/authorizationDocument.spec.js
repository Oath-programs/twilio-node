'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('AuthorizationDocument', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.preview.hosted_numbers.authorizationDocuments('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'address_sid': 'AD11111111111111111111111111111111',
          'cc_emails': [
              'aaa@twilio.com',
              'bbb@twilio.com'
          ],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': 'test@twilio.com',
          'links': {
              'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
          },
          'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'signing',
          'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.authorizationDocuments('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.preview.hosted_numbers.authorizationDocuments('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'cc_emails': [
              'test1@twilio.com',
              'test2@twilio.com'
          ],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': 'test+hosted@twilio.com',
          'links': {
              'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
          },
          'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'signing',
          'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.authorizationDocuments('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0'
          },
          'items': [
              {
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'cc_emails': [
                      'test1@twilio.com',
                      'test2@twilio.com'
                  ],
                  'date_created': '2017-03-28T20:06:39Z',
                  'date_updated': '2017-03-28T20:06:39Z',
                  'email': 'test+hosted@twilio.com',
                  'links': {
                      'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
                  },
                  'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'signing',
                  'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.preview.hosted_numbers.authorizationDocuments.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0'
          },
          'items': [
              {
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'cc_emails': [
                      'test1@twilio.com',
                      'test2@twilio.com'
                  ],
                  'date_created': '2017-03-28T20:06:39Z',
                  'date_updated': '2017-03-28T20:06:39Z',
                  'email': 'test+hosted@twilio.com',
                  'links': {
                      'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
                  },
                  'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'signing',
                  'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.preview.hosted_numbers.authorizationDocuments.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0'
          },
          'items': [
              {
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'cc_emails': [
                      'test1@twilio.com',
                      'test2@twilio.com'
                  ],
                  'date_created': '2017-03-28T20:06:39Z',
                  'date_updated': '2017-03-28T20:06:39Z',
                  'email': 'test+hosted@twilio.com',
                  'links': {
                      'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
                  },
                  'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'signing',
                  'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.preview.hosted_numbers.authorizationDocuments.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.preview.hosted_numbers.authorizationDocuments.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?Status=signed&Email=test%2Bhosted%40twilio.com&PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?Status=signed&Email=test%2Bhosted%40twilio.com&PageSize=50&Page=0'
          },
          'items': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.authorizationDocuments.list();
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
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments?PageSize=50&Page=0'
          },
          'items': [
              {
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'cc_emails': [
                      'test1@twilio.com',
                      'test2@twilio.com'
                  ],
                  'date_created': '2017-03-28T20:06:39Z',
                  'date_updated': '2017-03-28T20:06:39Z',
                  'email': 'test+hosted@twilio.com',
                  'links': {
                      'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
                  },
                  'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'signing',
                  'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.authorizationDocuments.list();
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

      var opts = {
        hostedNumberOrderSids: ['hosted_number_order_sids'],
        addressSid: 'ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        email: 'email',
        contactTitle: 'contact_title',
        contactPhoneNumber: 'contact_phone_number'
      };
      var promise = client.preview.hosted_numbers.authorizationDocuments.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments';

      var values = {
        HostedNumberOrderSids: serialize.map(['hosted_number_order_sids'], function(e) { return e; }),
        AddressSid: 'ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        Email: 'email',
        ContactTitle: 'contact_title',
        ContactPhoneNumber: 'contact_phone_number',
      };
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
          'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'cc_emails': [
              'test1@twilio.com',
              'test2@twilio.com'
          ],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': 'test+hosted@twilio.com',
          'links': {
              'dependent_hosted_number_orders': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentHostedNumberOrders'
          },
          'sid': 'PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'signing',
          'url': 'https://preview.twilio.com/HostedNumbers/AuthorizationDocuments/PXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {
        hostedNumberOrderSids: ['hosted_number_order_sids'],
        addressSid: 'ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        email: 'email',
        contactTitle: 'contact_title',
        contactPhoneNumber: 'contact_phone_number'
      };
      var promise = client.preview.hosted_numbers.authorizationDocuments.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
