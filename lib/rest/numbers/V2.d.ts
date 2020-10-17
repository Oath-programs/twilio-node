/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Numbers = require('../Numbers');
import Version = require('../../base/Version');
import { RegulatoryComplianceList } from './v2/regulatoryCompliance';
import { RegulatoryComplianceListInstance } from './v2/regulatoryCompliance';


declare class V2 extends Version {
  /**
   * Initialize the V2 version of Numbers
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Numbers);

  readonly regulatoryCompliance: RegulatoryComplianceListInstance;
}

export = V2;
