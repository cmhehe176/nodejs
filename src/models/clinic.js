// Trong file clinic.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate(models) {
      Clinic.hasMany(models.Doctor, { foreignKey: 'clinic_id' });
    }
  }
  
  Clinic.init({
    clinic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clinic_name: DataTypes.STRING,
    clinic_address: DataTypes.STRING,
    clinic_phone: DataTypes.STRING,
    clinic_email: DataTypes.STRING,
    // ... các trường khác của bảng Clinic
  }, {
    sequelize,
    modelName: 'Clinic',
    tableName:'clinics',
    timestamps: true,
    paranoid: true,
  });

  return Clinic;
};
