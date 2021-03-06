module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define("About", {
    title: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
  }, {timestamps: false});
  return About;
};