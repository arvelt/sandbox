var assert = require('assert');
var server = require('../app');
var request = require('supertest');
var user1 = request.agent();

describe('Autorication', function() {
    it('No authorication is 401', function(done) {
        request(server)
        .get('/todo/list')
        .expect(401)
        .end(function(err,res){
            if (err) throw err;
            done();
        })
    });

    it('Autorication is 302 and redirect', function(done) {
        request(server)
        .post('/login')
        .send({username:'testuser', password:'password'})
        .expect(302)
        .end(function(err,res){
            if (err) throw err;
            done();
        })
    });
});

describe('Todo', function() {
    var cookie;
    beforeEach(function (done) {
        request(server)
        .post('/login')
        .send({username:'testuser', password:'password'})
        .expect(302)
        .end(function(err,res){
            cookie = res.headers['set-cookie'];
            if (err) throw err;
            setTimeout(function(){
                done();
            }, 500);
        })
    });

    it('No Item', function(done) {
        request(server)
        .get('/todo/list')
        .set('cookie', cookie)
        .expect(200)
        .end(function(err,res){
            assert(res.body.length == 0)
            if (err) throw err;
            done();
        })
    });

    it('Add and get list', function(done) {
        var assertMessage = 'test message';

        //add todo
        request(server)
        .post('/todo/add')
        .send({content:assertMessage})
        .set('cookie', cookie)
        .expect(200)
        .end(function(err,res){
            if (err) throw err;

            //get list
            request(server)
            .get('/todo/list')
            .set('cookie', cookie)
            .expect(200)
            .end(function(err,res){
                assert(res.body.length == 1)
                assert(res.body[0].content == assertMessage)
                if (err) throw err;
                done();
            })
        })
    });

    it('Put', function(done) {
        var initMessage = 'test message';
        var assertMessage = 'change message';
        var id;

        //add todo
        request(server)
        .post('/todo/add')
        .send({content:initMessage})
        .set('cookie', cookie)
        .expect(200)
        .end(function(err,res){
            id = res.body._id;
            if (err) throw err;

            //put todo
            request(server)
            .put('/todo/'+id)
            .send({content:assertMessage})
            .set('cookie', cookie)
            .expect(200)
            .end(function(err,res){
                assert(res.body.content == assertMessage)
                if (err) throw err;
                done();
            })
        })
    });

    it('Delete', function(done) {
        var initMessage = 'test message';
        var id;

        //add todo
        request(server)
        .post('/todo/add')
        .send({content:initMessage})
        .set('cookie', cookie)
        .expect(200)
        .end(function(err,res){
            id = res.body._id;
            if (err) throw err;

            //delete todo
            request(server)
            .delete('/todo/'+id)
            .set('cookie', cookie)
            .expect(200)
            .end(function(err,res){
                if (err) throw err;
                done();
            })
        })
    });
});
