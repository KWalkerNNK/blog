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

    // POST /movies/create
    store(req, res, next) {
        const formData = req.body;
        formData.img = `http://img.youtube.com/vi/${formData.url}/sddefault.jpg`;
        const song = new Song(formData);
        song.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    //get /movies/all
    all(req, res, next) {
        Song.find()
            .lean()
            .then((song) => res.render('movies/all', { song }))
            .catch(next);
    }

    //get /movies/:slug/edit
    edit(req, res, next) {
        Song.findOne({ slug: req.params.slug })
            .lean()
            .then((song) => res.render('movies/edit', { song }))
            .catch(next);
    }

    //put /movies/:slug
    update(req, res, next) {
        const formData = req.body;
        formData.img = `http://img.youtube.com/vi/${formData.url}/sddefault.jpg`;
        Song.updateOne({ slug: req.params.slug }, formData)
            .then(() => res.redirect('/movies/all'))
            .catch(next);
    }

    //delete /movies/:slug/remove // Xoá mềm
    remove(req, res, next) {
        Song.delete({ slug: req.params.slug })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //get /movies/restore
    restore(req, res, next) {
        Song.findDeleted()
            .lean()
            .then((song) => res.render('movies/restore', { song }))
            .catch(next);
    }

    //delete /movies/:slug/destroy
    destroy(req, res, next) {
        Song.deleteOne({ slug: req.params.slug })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //post /movies/:slug/restore
    readyToRestore(req, res, next) {
        Song.restore({ slug: req.params.slug })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new MovieController();
