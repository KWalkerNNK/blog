const Song = require('../models/Song');
class MovieController {
    // GET /movies/id
    show(req, res, next) {
        Song.findOne({ slug: req.params.slug })
            .lean()
            .then(song => res.render('movies/show', { song }))
            .catch(next)
    }
}
module.exports = new MovieController();
