
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var passport = require('passport');
var MongoStore = require('connect-mongo')(express);

var models = require('./models/User.js'),
    User = models.User;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

//session config
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);

// FIX? use configure? which?
app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('hostname', 'http://localhost:3000');
});
app.configure('production', function(){
    app.use(express.errorHandler());
    app.set('hostname', 'http://todo-4-you.herokuapp.com');
});

app.get('/', routes.index);
app.get('/users', user.list);

var login = require('./routes/login');

if (process.env.NODE_ENV === 'test') {
    var LocalStrategy = require('passport-local').Strategy;
    app.post('/login',
      passport.authenticate('local', { successRedirect: '/',
                                       failureRedirect: '/login',
                                       failureFlash: true })
    );
} else {
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    app.get('/login', login.index);
}

app.get('/test', function (req, res) {
    res.send('server test');
});
/*
 *todos
 */
var todo = require('./routes/todo');
var todoModels = require('./models/Todo.js'),
    TodoModel = todoModels.Todo;
app.get('/todo/list', todo.list);
app.get('/todo/:id?', todo.get);
app.post('/todo/add', todo.add);
app.put('/todo/:id?', todo.put);
app.delete('/todo/:id?', todo.delete);



/**
 * authrization
 */
if (process.env.NODE_ENV === 'test') {
    passport.use(new LocalStrategy(
        function(username, password, done) {

            User.remove({}, function(err) {
                if (err)  console.log('err occuered. collection removed ->',err)
            });
            TodoModel.remove({}, function(err) {
                if (err)  console.log('err occuered. collection removed ->',err)
            });

            var us = new User({
                userId : username+password,
                name : username,
                email: username+'@test'
            });
            us.save();
            done(null, us);
        }
    ));
}

else {
    passport.use(new GoogleStrategy({
        clientID: process.env['CLIENT_ID'],
        clientSecret: process.env['CLIENTSECRET_ID'],
        callbackURL: app.get('hostname')+'/auth/google/return'
    },
        function(accessToken, refreshToken, profile, done) {

            //if User model found continued,
            //otherwise make new User model
            User.find({
                userId: profile.id
            },function(err, data){
                // data is array

                if(data.length != 0) {
                    done(null, data[0])
                } else {
                    var us = new User({
                        userId : profile.id,
                        name : profile.displayName,
                        email: profile.emails[0].value
                    });
                    us.save();
                    done(null, us);
                }
            })
        }
    ));
}

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email'] }));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

//to session
passport.serializeUser(function(user, done) {
    // for storeing session
    done(null, user.userId);
});

//from session
passport.deserializeUser(function(id, done) {
    // deserializer and set req.user
    User.find({userId:id},function(err, data){
        done(null, data[0]);
    })
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening on port %d', app.get('port'));
});
module.exports = app;
