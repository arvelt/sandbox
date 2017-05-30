define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/topic",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/store/JsonRest",
    "myapp/views/todoContainerView",
    "dojo/text!./templates/todoListView.html"
], function(declare, lang, topic, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, JsonRest, TodoContainerView, template){

    return declare('myapp/views/TodoListView', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        store: new JsonRest({target: "/todo/list"}),
        restStore: new JsonRest({target: "/todo/"}),
        startup: function(){
            this.inherited(arguments);
            this.subscribe('/todo/list', lang.hitch(this, function(){
                this.loadItems();
            }))
            this.loadItems();
        },
        loadItems: function(){
            this.destroyDescendants();
            this.store.query().then(lang.hitch(this, function(todos){
                todos.forEach(lang.hitch(this, function(todo){
                    var item = new TodoContainerView({
                        model: todo
                    })
                    item.on('delete', lang.hitch(this, function(e){
                        this.restStore.remove(e.id).then(lang.hitch(this, function(res){
                            topic.publish('/todo/list')
                        }))
                    }));
                    item.on('done', lang.hitch(this, function(e){
                        this.restStore.put(e.data,{id: e.data._id}).then(lang.hitch(this, function(res){
                        }))
                    }));
                    item.placeAt(this.containerNode, 'first');
                }));
            }))
        }
    });
});
