const Song = require('../models/Song');
class SiteController {
    //GET /home
    home(req, res, next) {
        Song.find({})
            .lean()
            .then((songs) => res.render('home', { songs }))
            .catch(next);
        // res.render('home');
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
