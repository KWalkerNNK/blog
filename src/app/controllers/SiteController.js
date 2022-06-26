const Song = require('../models/Song');
class SiteController {
    //GET /home
    home(req, res) {
        Song.find({}, function (err, songs) {
            if (!err) {
                res.json(songs);
            } else {
                res.status(400).json({ error: 'Error' });
            }
        });
        // res.render('home');
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
