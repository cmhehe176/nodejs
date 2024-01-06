// Trong file disease.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    static associate(models) {
      // Define associations here
      Disease.belongsTo(models.Patient, { foreignKey: 'patient_id' });

    }
  }
  
  Disease.init({
    disease_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    disease_name: DataTypes.STRING,
    symptoms: DataTypes.STRING,
    treatment: DataTypes.STRING,
    // ... các trường khác của bảng Disease
  }, {
    sequelize,
    modelName: 'Disease',
    timestamps: true,
    paranoid: true,
  });

  return Disease;
};
