var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');

var JavascriptEvalModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'JavascriptEvalModel',
        _view_name : 'JavascriptEvalView',
        _model_module : 'jupyter-javascript-eval-widget',
        _view_module : 'jupyter-javascript-eval-widget',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        javascript_code : 'alert("No javascript code present"); return { error: "No javascript code present" }'
    })
});

var JavascriptEvalView = widgets.DOMWidgetView.extend({
    render: function() {
      'use strict';
      let result = (new Function('view', this.model.get('javascript_code')))(this);
      console.log("javascript eval widget instantiated with result:", result);
    }
});


module.exports = {
    JavascriptEvalModel : JavascriptEvalModel,
    JavascriptEvalView : JavascriptEvalView
};
