module.exports = (sequelize, DataTypes) => {
  const BenefitIntro = sequelize.define("BenefitIntro", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
    answer: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
    description:{
      type: DataTypes.TEXT,
      unique: false,
      allowNull: true,
    },
  }, {timestamps: false});
  return BenefitIntro;
};
