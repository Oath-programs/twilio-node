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

describe('UsageRecord', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2015-05-01T20:00:00Z',
                      'end_time': '2015-06-01T20:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.usageRecords.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2015-05-01T20:00:00Z',
                      'end_time': '2015-06-01T20:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.usageRecords.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/UsageRecords',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2015-05-01T20:00:00Z',
                      'end_time': '2015-06-01T20:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.usageRecords.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/UsageRecords';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_all response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2015-05-01T20:00:00Z',
                      'end_time': '2015-06-01T20:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_all_day response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-02T00:00:00Z',
                      'end_time': '2019-05-03T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Granularity=day&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Granularity=day&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_all_hour response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-01T01:00:00Z',
                      'end_time': '2019-05-01T02:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-01T00:00:00Z',
                      'end_time': '2019-05-01T01:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Granularity=hour&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Granularity=hour&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_sim_filter response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-02T00:00:00Z',
                      'end_time': '2019-05-03T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Granularity=day&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Granularity=day&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_network_filter response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-02T00:00:00Z',
                      'end_time': '2019-05-03T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Network=HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Granularity=day&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Network=HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Granularity=day&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_country_filter response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': 'FR'
              },
              {
                  'period': {
                      'start_time': '2019-05-02T00:00:00Z',
                      'end_time': '2019-05-03T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': 'FR'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?IsoCountry=FR&Granularity=day&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?IsoCountry=FR&Granularity=day&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_fleet_filter response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_sid': null,
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-02T00:00:00Z',
                      'end_time': '2019-05-03T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Granularity=day&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Granularity=day&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_group_by_sim response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 500,
                  'data_download': 1500,
                  'data_total': 2000,
                  'sim_sid': 'HSbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Group=sim&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Group=sim&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_group_by_fleet response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'network_sid': null,
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 500,
                  'data_download': 1500,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': 'HFbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                  'network_sid': null,
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Group=fleet&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Group=fleet&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_group_by_network response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': 'HWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iso_country': null
              },
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 500,
                  'data_download': 1500,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': 'HWbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                  'iso_country': null
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Group=network&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Group=network&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_group_by_iso_country response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': 'FR'
              },
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 500,
                  'data_download': 1500,
                  'data_total': 2000,
                  'sim_sid': null,
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': 'US'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?Group=isoCountry&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?Group=isoCountry&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_day_group_by_sim_and_filter_by_country response',
    function(done) {
      var body = {
          'usage_records': [
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 1000,
                  'data_download': 1000,
                  'data_total': 2000,
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': 'FR'
              },
              {
                  'period': {
                      'start_time': '2019-05-03T00:00:00Z',
                      'end_time': '2019-05-04T00:00:00Z'
                  },
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'data_upload': 500,
                  'data_download': 1500,
                  'data_total': 2000,
                  'sim_sid': 'HSbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                  'fleet_sid': null,
                  'network_sid': null,
                  'iso_country': 'FR'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/UsageRecords?IsoCountry=FR&Group=sim&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/UsageRecords?IsoCountry=FR&Group=sim&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
