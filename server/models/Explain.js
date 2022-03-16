module.exports = (sequelize, DataTypes) => {
  const Explain = sequelize.define("Explain", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
  }, {timestamps: false});
  Explain.associate = (models) => {
    Explain.hasMany(models.ExplainImg, {
      onDelete: "cascade",
    });
  };
  return Explain;
};