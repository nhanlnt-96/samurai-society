module.exports = (sequelize, DataTypes) => {
  const BenefitDetail = sequelize.define("BenefitDetail", {
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
  return BenefitDetail;
};