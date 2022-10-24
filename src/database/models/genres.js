const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
  let alias = 'genres';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    create_at: {
      type: DataTypes.DATE
    },
    updated_at: {
      type: DataTypes.DATE
    },
    title: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.DECIMAL
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  };
  let config = {
    timestamps: false,
    tableNane: 'genres',
    // createdAt: create_at
  };

  const Genre = sequelize.define(alias, cols, config);
  return Genre;
}