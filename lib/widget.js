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
    }),

    initialize: function(attributes, options) {
        'use strict';
        JavascriptEvalModel.__super__.initialize.apply(this, arguments);
        this.eval_result = (new Function('model', this.get('javascript_code')))(this);
    }
});

var JavascriptEvalView = widgets.DOMWidgetView.extend({
    render: function() {
        if (this.model.eval_result instanceof Node) {
          this.el.appendChild(this.model.eval_result);
        };
    }
});


module.exports = {
    JavascriptEvalModel : JavascriptEvalModel,
    JavascriptEvalView : JavascriptEvalView
};
