define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojox/html/entities",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/todoContainerView.html"
], function(declare, lang, html, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template){

    return declare('myapp/views/TodoContainerView', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        model: null,
        content: null,
        date: null,
        postCreate: function(){
            this.inherited(arguments);
            this.doneButton.set('checked', this.model.done);
            this.content.set('content', html.encode(this.model.content));
        },
        startup: function(){
            this.inherited(arguments);
        },
        _onDelete: function(){
            this.emit('delete', {id: this.model._id});
        },
        _onDone: function(){
            this.model.done = this.doneButton.get('checked');
            this.emit('done', {data: this.model} );
        }
    });
});
