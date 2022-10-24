const db = require('./../database/models/index');

controllers = {
  list: async (req, res) => {
    const movies = await db.movies.findAll()
    res.render('moviesList', { movies });
  },
  detail: (req, res) => {
    db.movies.findByPk(id).then(movies => {
      res.render('moviesList', { movies });
    })
  },
}
module.exports = controllers