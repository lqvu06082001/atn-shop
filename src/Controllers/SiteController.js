class SiteController {
    
    // [GET] /index -- Home page
    index(req, res, next){

        res.render('index');
    }

    contact(req, res, next){

        res.render('contact');
    }

    error(req, res, next){

        res.render('partials/error');
    }

    search(req,res){
        res.render('search');
    }

}

module.exports = new SiteController;

const res = require('express/lib/response');
const siteController = require('./SiteController');