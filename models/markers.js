"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Markers extends Model {
    static associate(models) {}
  }
  Markers.init(
    {
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Markers",
    }
  );
  return Markers;
};
