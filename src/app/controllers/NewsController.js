class NewsController {
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('splu');
  }
}

module.exports = new NewsController();
