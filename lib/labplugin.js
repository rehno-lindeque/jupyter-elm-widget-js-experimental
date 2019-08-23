var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-javascript-eval-widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-javascript-eval-widget',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

