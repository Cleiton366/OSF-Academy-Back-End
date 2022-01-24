/**
 * @type {Object} Sentry
 */
const Sentry = require("@sentry/node");
require("dotenv").config();

Sentry.init({
  dsn: process.env.DSN,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

module.exports = { Sentry };
