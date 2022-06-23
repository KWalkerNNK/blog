class NewsController {
    //GET /news
    index(req, res) {
        res.render('news')
    }

    // GET /news/id
    show(req, res){
        res.send('id moiws')
    }
}
module.exports = new NewsController