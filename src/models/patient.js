// Trong file patient.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.hasMany(models.Appointment, { foreignKey: 'patient_id' });
      Patient.hasMany(models.MedicalHistory, { foreignKey: 'patient_id' });
      Patient.hasMany(models.Disease, { foreignKey: 'patient_id' });
      // Thêm các mối quan hệ khác nếu cần
    }
  }
  
  Patient.init({
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    roleID: DataTypes.TINYINT(1),
    // ... các trường khác của bảng Patient
  }, {
    sequelize,
    modelName: 'Patient',
    tableName:'Patients',
    timestamps: true,
    paranoid: true,
  });

  return Patient;
};
