var models = require('../models/Todo.js'),
    Todo = models.Todo;

exports.list = function(req, res){
    //req has user, session, route, method
    //app,js deserializeUser is setted req.user

    if (!req.user) {
        res.send(401);
        return;
    }

    Todo.getList(req.user.userId,function(err, todos){
        if (err) {
            res.send(err)
        } else {
            res.json(todos)
        }
    })
};

exports.get = function(req, res){
    //app,js deserializeUser is setted req.user
    //req has user, session, route, method

    if (!req.user) {
        res.send(401);
        return;
    }

    if (!req.route || !req.route.params) {
        res.send(400);
        return;
    }

    Todo.getById(req.route.params['id'],function(err, todo){
        if (err) {
            res.send(err)
        } else {
            res.json(todo)
        }
    })
};

exports.add = function(req, res){
    //app,js deserializeUser is setted req.user
    //req has user, session, route, method

    //TODO input validation
    if (!req.user) {
        res.send(401);
        return;
    }

    if (!req.body) {
        res.send(400);
        return;
    }

    var params = {
        userId : req.user.userId,
        content : req.body.content,
        date  : req.body.date
    }
    Todo.createDocument(params, function(err, todo){
        if (err) {
            res.send(err)
        } else {
            res.json(todo)
        }
    })
};

exports.put = function(req, res){
    //app,js deserializeUser is setted req.user

    if (!req.user) {
        res.send(401);
        return;
    }

    if (!req.route || !req.route.params) {
        res.send(400);
        return;
    }

    var params = {
       userId : req.user.userId,
       content : req.body.content,
       done  : req.body.done,
       updated : Date.now()
    }

    Todo.updateById(req.route.params['id'], params, function(err, todo){
        if (err) {
            res.send(err)
        } else {
            res.json(todo)
        }
    })
};

exports.delete = function(req, res){
    //app,js deserializeUser is setted req.user

    if (!req.user) {
        res.send(401);
        return;
    }

    if (!req.route || !req.route.params) {
        res.send(400);
        return;
    }

    Todo.removeById(req.route.params['id'],function(err){
        res.send(err || {})
    })
};
