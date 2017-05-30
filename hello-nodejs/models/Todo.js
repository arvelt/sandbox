var mongoose = require('mongoose');
var url;
if (process.env.NODE_ENV === 'test') {
    url = 'mongodb://localhost/test'
} else if (process.env.NODE_ENV === 'production') {
    url = process.env['MONGOLAB_URI']
} else {
    url = 'mongodb://localhost/todo'; //database name -> mongo show dbs
}
var db  = mongoose.createConnection(url, function(err, res){
    if(err){
        console.log('Error connected: ' + url + ' - ' + err);
    }else{
        console.log('Success connected: ' + url);
    }
});

// Modelの定義
var Todo = new mongoose.Schema({
    userId : String,
    content    : String,
    done  : { type: Boolean, default: false},
    date  : Date,
    updated: Date,
    created: { type: Date, default: Date.now }
},{collection: 'todos'});

Todo.statics.getList = function (userId, cb) {
  this.find({userId:userId}, cb);
}

Todo.statics.getById = function(id, cb){
    this.findById(id, cb)
}

Todo.statics.createDocument = function(params, cb){
    this.create(params, cb)
}

Todo.statics.updateById = function(id, params, cb){
    this.findByIdAndUpdate(id, params, cb)
}

Todo.statics.removeById = function(id, cb){
    this.findByIdAndRemove(id, cb)
}

exports.Todo = db.model('Todo', Todo);
