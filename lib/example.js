var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var ElmModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'ElmModel',
        _view_name : 'ElmView',
        _model_module : 'jupyter-elm-widget',
        _view_module : 'jupyter-elm-widget',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        compiled_js_code : 'alert("No compiled js code present"); return { error: "No compiled js code present" }'
    })
});

var ElmView = widgets.DOMWidgetView.extend({
    render: function() {
        'use strict';
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
        this.el.appendChild(document.createTextNode(description));
        result = (new Function('self', this.compiled_js_code))(this);
        console.log(result);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});


module.exports = {
    ElmModel : ElmModel,
    ElmView : ElmView
};
