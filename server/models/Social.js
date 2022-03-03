module.exports = (sequelize, DataTypes) => {
  const Social = sequelize.define("Social", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    socialName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    socialUrl: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
  }, {timestamps: false});
  return Social;
};