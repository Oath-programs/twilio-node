/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the AlertList
 *
 * @param version - Version of the resource
 */
declare function AlertList(version: V1): AlertListInstance;

interface AlertListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AlertContext;
  /**
   * Streams AlertInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: AlertInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AlertInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AlertListInstanceEachOptions, callback?: (item: AlertInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a alert
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): AlertContext;
  /**
   * Retrieve a single target page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
  /**
   * Retrieve a single target page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
  /**
   * Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AlertInstance[]) => any): Promise<AlertInstance[]>;
  /**
   * Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AlertListInstanceOptions, callback?: (error: Error | null, items: AlertInstance[]) => any): Promise<AlertInstance[]>;
  /**
   * Retrieve a single page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
  /**
   * Retrieve a single page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AlertListInstancePageOptions, callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property endDate - Only include alerts that occurred on or before this date and time
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property logLevel - Only show alerts for this log-level
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property startDate - Only include alerts that occurred on or after this date and time
 */
interface AlertListInstanceEachOptions {
  callback?: (item: AlertInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endDate?: Date;
  limit?: number;
  logLevel?: string;
  pageSize?: number;
  startDate?: Date;
}

/**
 * Options to pass to list
 *
 * @property endDate - Only include alerts that occurred on or before this date and time
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property logLevel - Only show alerts for this log-level
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property startDate - Only include alerts that occurred on or after this date and time
 */
interface AlertListInstanceOptions {
  endDate?: Date;
  limit?: number;
  logLevel?: string;
  pageSize?: number;
  startDate?: Date;
}

/**
 * Options to pass to page
 *
 * @property endDate - Only include alerts that occurred on or before this date and time
 * @property logLevel - Only show alerts for this log-level
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property startDate - Only include alerts that occurred on or after this date and time
 */
interface AlertListInstancePageOptions {
  endDate?: Date;
  logLevel?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  startDate?: Date;
}

interface AlertPayload extends AlertResource, Page.TwilioResponsePayload {
}

interface AlertResource {
  account_sid: string;
  alert_text: string;
  api_version: string;
  date_created: Date;
  date_generated: Date;
  date_updated: Date;
  error_code: string;
  log_level: string;
  more_info: string;
  request_headers?: string;
  request_method: string;
  request_url: string;
  request_variables?: string;
  resource_sid: string;
  response_body?: string;
  response_headers?: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface AlertSolution {
}


declare class AlertContext {
  /**
   * Initialize the AlertContext
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a AlertInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AlertInstance) => any): Promise<AlertInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AlertInstance extends SerializableClass {
  /**
   * Initialize the AlertContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, payload: AlertPayload, sid: string);

  private _proxy: AlertContext;
  accountSid: string;
  alertText: string;
  apiVersion: string;
  dateCreated: Date;
  dateGenerated: Date;
  dateUpdated: Date;
  errorCode: string;
  /**
   * fetch a AlertInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AlertInstance) => any): Promise<AlertInstance>;
  logLevel: string;
  moreInfo: string;
  requestHeaders: string;
  requestMethod: string;
  requestUrl: string;
  requestVariables: string;
  resourceSid: string;
  responseBody: string;
  responseHeaders: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class AlertPage extends Page<V1, AlertPayload, AlertResource, AlertInstance> {
  /**
   * Initialize the AlertPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AlertSolution);

  /**
   * Build an instance of AlertInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AlertPayload): AlertInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AlertContext, AlertInstance, AlertList, AlertListInstance, AlertListInstanceEachOptions, AlertListInstanceOptions, AlertListInstancePageOptions, AlertPage, AlertPayload, AlertResource, AlertSolution }
