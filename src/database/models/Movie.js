const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {

  let alias = 'movies';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    title: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.DECIMAL
    },
    awards: {
      type: DataTypes.INTEGER
    },
    release_date: {
      type: DataTypes.DATE
    },
    length: {
      type: DataTypes.INTEGER
    },
    genre_id: {
      type: DataTypes.INTEGER
    }

  };
  let config = {
    timestamps: false,
    tableNane: 'movies',

  };

  const Movie = sequelize.define(alias, cols, config);
  return Movie;
}