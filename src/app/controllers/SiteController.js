class SiteController {
  index(req, res) {
    res.render('home');
  }

  search(req, res) {
    res.show('search');
  }
}

module.exports = new SiteController();
