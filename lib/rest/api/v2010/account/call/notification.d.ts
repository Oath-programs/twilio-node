/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the NotificationList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 * @param callSid - The SID of the Call the resource is associated with
 */
declare function NotificationList(version: V2010, accountSid: string, callSid: string): NotificationListInstance;

interface NotificationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): NotificationContext;
  /**
   * Streams NotificationInstance records from the API.
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
  each(callback?: (item: NotificationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NotificationInstance records from the API.
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
  each(opts?: NotificationListInstanceEachOptions, callback?: (item: NotificationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a notification
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): NotificationContext;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NotificationInstance[]) => any): Promise<NotificationInstance[]>;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: NotificationListInstanceOptions, callback?: (error: Error | null, items: NotificationInstance[]) => any): Promise<NotificationInstance[]>;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: NotificationListInstancePageOptions, callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
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
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property log - Filter by log level
 * @property messageDate - Filter by date
 * @property messageDateAfter - Filter by date
 * @property messageDateBefore - Filter by date
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface NotificationListInstanceEachOptions {
  callback?: (item: NotificationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  log?: number;
  messageDate?: Date;
  messageDateAfter?: Date;
  messageDateBefore?: Date;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property log - Filter by log level
 * @property messageDate - Filter by date
 * @property messageDateAfter - Filter by date
 * @property messageDateBefore - Filter by date
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface NotificationListInstanceOptions {
  limit?: number;
  log?: number;
  messageDate?: Date;
  messageDateAfter?: Date;
  messageDateBefore?: Date;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property log - Filter by log level
 * @property messageDate - Filter by date
 * @property messageDateAfter - Filter by date
 * @property messageDateBefore - Filter by date
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface NotificationListInstancePageOptions {
  log?: number;
  messageDate?: Date;
  messageDateAfter?: Date;
  messageDateBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  date_created: Date;
  date_updated: Date;
  error_code: string;
  log: string;
  message_date: Date;
  message_text: string;
  more_info: string;
  request_method: string;
  request_url: string;
  request_variables?: string;
  response_body?: string;
  response_headers?: string;
  sid: string;
  uri: string;
}

interface NotificationSolution {
  accountSid?: string;
  callSid?: string;
}


declare class NotificationContext {
  /**
   * Initialize the NotificationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param callSid - The Call SID of the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, callSid: string, sid: string);

  /**
   * fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: NotificationInstance) => any): Promise<NotificationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class NotificationInstance extends SerializableClass {
  /**
   * Initialize the NotificationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param callSid - The SID of the Call the resource is associated with
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: NotificationPayload, accountSid: string, callSid: string, sid: string);

  private _proxy: NotificationContext;
  accountSid: string;
  apiVersion: string;
  callSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  errorCode: string;
  /**
   * fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: NotificationInstance) => any): Promise<NotificationInstance>;
  log: string;
  messageDate: Date;
  messageText: string;
  moreInfo: string;
  requestMethod: string;
  requestUrl: string;
  requestVariables: string;
  responseBody: string;
  responseHeaders: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uri: string;
}


declare class NotificationPage extends Page<V2010, NotificationPayload, NotificationResource, NotificationInstance> {
  /**
   * Initialize the NotificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: NotificationSolution);

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationPayload): NotificationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NotificationContext, NotificationInstance, NotificationList, NotificationListInstance, NotificationListInstanceEachOptions, NotificationListInstanceOptions, NotificationListInstancePageOptions, NotificationPage, NotificationPayload, NotificationResource, NotificationSolution }
