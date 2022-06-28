const Song = require('../models/Song');
class MovieController {
    // GET /movies/id
    show(req, res, next) {
        Song.findOne({ slug: req.params.slug })
            .lean()
            .then((song) => res.render('movies/show', { song }))
            .catch(next);
    }

    // GET /movies/create
    create(req, res, next) {
        res.render('movies/create');
    }

    // POST
    store(req, res, next) {
        const formData = req.body;
        formData.img = `http://img.youtube.com/vi/${formData.url}/sddefault.jpg`;
        const song = new Song(formData);
        song.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}
module.exports = new MovieController();
