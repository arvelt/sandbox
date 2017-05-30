
/*
 * GET home page.
 */

exports.index = function(req, res){
    //app,js deserializeUser is setted req.user
    console.log("user ->",req.user)
    console.log("sess ->",req.session)

    if (!req.user) {
        res.redirect('/login');
    }

    res.render('index', {profile:req.user});
};
