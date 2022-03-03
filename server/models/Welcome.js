module.exports = (sequelize, DataTypes) => {
  const Welcome = sequelize.define("Welcome", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {timestamps: false});
  return Welcome;
};
