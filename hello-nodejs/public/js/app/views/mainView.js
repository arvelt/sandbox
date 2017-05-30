define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/mainView.html",
    "myapp/views/todoInputView",
    "myapp/views/todoListView"
], function(declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template){
    return declare('myapp/views/MainView',[_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        startup: function() {
            this.inherited(arguments);
            console.log('Main View start');
        }
    });
});
