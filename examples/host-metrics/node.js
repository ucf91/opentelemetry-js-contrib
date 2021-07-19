'use strict';

const { HostMetrics } = require('@opentelemetry/host-metrics');
const { DiagConsoleLogger, DiagLogLevel, diag } = require('@opentelemetry/api');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const hostMetrics = new HostMetrics({});
hostMetrics.start();

// keep running
(function wait() {
  setTimeout(wait, 1000);
}());

