define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/topic",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/store/JsonRest",
    "dojo/text!./templates/todoInputView.html"
], function(declare, lang, topic, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, JsonRest, template){
    return declare('myapp/views/TodoInputView', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        store: new JsonRest({target: "/todo/add"}),
        startup: function() {
            this.inherited(arguments);
        },
        onTodoAdd: function(){
            var content = this.content.get('value');
            if (!content){
                return;
            }
            var data = {
                    content: content
            };
            this.store.put(data, {handleAs: 'status'}).then(lang.hitch(this, function(res){
                this.content.set('value', '');
                topic.publish('/todo/list')
            }))
        }
    });
});
