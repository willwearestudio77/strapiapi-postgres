'use strict';

/**
 * job-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-history.job-history');
