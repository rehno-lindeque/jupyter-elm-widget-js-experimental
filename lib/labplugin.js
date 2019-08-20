var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-elm-widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-elm-widget',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

