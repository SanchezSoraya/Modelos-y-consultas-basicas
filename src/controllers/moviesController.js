const { render } = require('ejs');
const db = require('../database/models');
const sequelize = db.sequelize;

const controllers = {
  list: async (req, res) => {
    const movies = await db.movies.findAll()
    res.render('moviesList', { movies });
  },
  detail: (req, res) => {
    db.movies.findByPk(req.params['id']).then(movie => {
      res.render('moviesDetail', { movie });
    });
  },
  new: (req, res) => {
    db.movie.findAll({
      order: [
        ['release_date', 'DESC']
      ],
      limit: 5
    }).then(movies => {
      res.render('newestMovies', { movies });
    });

  },
  recomended: (req, res) => {
    db.movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 8 }
      },
      order: [
        ['rating', 'DESC']
      ]
    })
      .then(movies => {
        res.render('recommendedMovies', { movies });
      });
  },

  //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: function (req, res) {
    res.render("moviesAdd")
  },
  create: function (req, res) {
    Movies.create({
      title: req.body.title,
      rating: req.body.rating,
      length: req.body.length,
      awards: req.body.awards,
      release_date: req.body.release_date
    })
      .then(movie => {
        res.redirect("/movies");
      })
      .catch(error => {
        res.send(error);
      })
  },
  edit: function (req, res) {
    let movieId = req.params.id;
    Movies.findByPk(movieId).then(movie => {
      res.render('moviesEdit', { movie });
    }).catch(error => res.send(error))

  },
  update: function (req, res) {
    let movieId = req.params.id;
    Movies.update({
      title: req.body.title,
      rating: req.body.rating,
      length: req.body.length,
      awards: req.body.awards,
      release_date: req.body.release_date

    }, {
      where: {
        id: movieId
      }
    })
      .then(function () {
        res.redirect("/movies")
      })
      .catch(error => res.send(error))
  },
  delete: function (req, res) {
    let movieId = req.params.id;
    Movies.findByPk(movieId)
      .then(function (movie) {
        res.render("moviesDelete", { Movie: movie })
      })
      .catch(error => res.send(error))
  },
  destroy: function (req, res) {
    let movieId = req.params.id;
    Movies.destroy({
      where: {
        id: movieId
      },
      force: true
    })
      .then(function () {
        res.redirect("/movies")
      })
      .catch(error => res.send(error))
  }

}
module.exports = controllers