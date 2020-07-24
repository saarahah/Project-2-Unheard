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
  });

  Death.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Death.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Death;
};