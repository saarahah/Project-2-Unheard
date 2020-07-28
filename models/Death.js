module.exports = function (sequelize, DataTypes) {
  var Death = sequelize.define("Death", {
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    deaths: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    lat: {
      type: DataTypes.FLOAT,
    },

    long: {
      type: DataTypes.FLOAT,
    },
  });
  return Death;
};
