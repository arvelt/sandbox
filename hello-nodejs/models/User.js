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
var UserSchema = new mongoose.Schema({
    userId : String,
    name    : String,
    email    : String,
    password  : String
},{collection: 'users'});

exports.User = db.model('User', UserSchema);
