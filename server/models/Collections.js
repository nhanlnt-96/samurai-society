module.exports = (sequelize, DataTypes) => {
  const Collections = sequelize.define("Collections", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {timestamps: false});
  return Collections;
};
