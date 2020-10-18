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


var client;
var holodeck;

describe('Workspace', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${sid}`;

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
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'default_activity_name': 'Offline',
          'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'event_callback_url': '',
          'events_filter': null,
          'friendly_name': 'new',
          'links': {
              'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
              'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
              'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
              'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
              'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
              'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
              'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
              'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
              'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
              'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
          },
          'multi_task_enabled': false,
          'prioritize_queue_order': 'FIFO',
          'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'timeout_activity_name': 'Offline',
          'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'default_activity_name': 'Offline',
          'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'event_callback_url': '',
          'events_filter': null,
          'friendly_name': 'new',
          'links': {
              'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
              'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
              'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
              'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
              'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
              'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
              'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
              'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
              'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
              'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
          },
          'multi_task_enabled': false,
          'prioritize_queue_order': 'FIFO',
          'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'timeout_activity_name': 'Offline',
          'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0',
              'key': 'workspaces',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0'
          },
          'workspaces': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'default_activity_name': 'Offline',
                  'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'event_callback_url': '',
                  'events_filter': null,
                  'friendly_name': 'new',
                  'links': {
                      'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
                      'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
                      'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
                      'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
                      'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
                      'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
                      'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
                      'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
                      'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
                      'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
                  },
                  'multi_task_enabled': false,
                  'prioritize_queue_order': 'FIFO',
                  'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'timeout_activity_name': 'Offline',
                  'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.taskrouter.v1.workspaces.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0',
              'key': 'workspaces',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0'
          },
          'workspaces': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'default_activity_name': 'Offline',
                  'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'event_callback_url': '',
                  'events_filter': null,
                  'friendly_name': 'new',
                  'links': {
                      'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
                      'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
                      'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
                      'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
                      'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
                      'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
                      'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
                      'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
                      'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
                      'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
                  },
                  'multi_task_enabled': false,
                  'prioritize_queue_order': 'FIFO',
                  'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'timeout_activity_name': 'Offline',
                  'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.taskrouter.v1.workspaces.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://taskrouter.twilio.com/v1/Workspaces',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0',
              'key': 'workspaces',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0'
          },
          'workspaces': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'default_activity_name': 'Offline',
                  'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'event_callback_url': '',
                  'events_filter': null,
                  'friendly_name': 'new',
                  'links': {
                      'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
                      'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
                      'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
                      'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
                      'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
                      'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
                      'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
                      'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
                      'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
                      'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
                  },
                  'multi_task_enabled': false,
                  'prioritize_queue_order': 'FIFO',
                  'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'timeout_activity_name': 'Offline',
                  'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.taskrouter.v1.workspaces.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.taskrouter.v1.workspaces.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://taskrouter.twilio.com/v1/Workspaces';

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
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0',
              'key': 'workspaces',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0'
          },
          'workspaces': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'default_activity_name': 'Offline',
                  'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'event_callback_url': '',
                  'events_filter': null,
                  'friendly_name': 'new',
                  'links': {
                      'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
                      'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
                      'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
                      'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
                      'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
                      'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
                      'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
                      'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
                      'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
                      'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
                  },
                  'multi_task_enabled': false,
                  'prioritize_queue_order': 'FIFO',
                  'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'timeout_activity_name': 'Offline',
                  'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0',
              'key': 'workspaces',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces?FriendlyName=friendly_name&PageSize=50&Page=0'
          },
          'workspaces': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces.list();
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

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.taskrouter.v1.workspaces.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://taskrouter.twilio.com/v1/Workspaces';

      var values = {FriendlyName: 'friendly_name', };
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
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'default_activity_name': 'Offline',
          'default_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'event_callback_url': '',
          'events_filter': null,
          'friendly_name': 'new',
          'links': {
              'activities': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Activities',
              'statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Statistics',
              'real_time_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RealTimeStatistics',
              'cumulative_statistics': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
              'task_queues': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues',
              'tasks': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks',
              'workers': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers',
              'workflows': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows',
              'task_channels': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskChannels',
              'events': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Events'
          },
          'multi_task_enabled': false,
          'prioritize_queue_order': 'FIFO',
          'sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'timeout_activity_name': 'Offline',
          'timeout_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.taskrouter.v1.workspaces.create(opts);
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

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${sid}`;

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

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
