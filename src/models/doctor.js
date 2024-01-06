// Trong file doctor.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.hasMany(models.Appointment, { foreignKey: 'doctor_id' });
      Doctor.hasMany(models.MedicalHistory, { foreignKey: 'doctor_id' });
      Doctor.hasMany(models.Schedule, { foreignKey: 'doctor_id' });
      // Thêm các mối quan hệ khác nếu cần
    }
  }
  
  Doctor.init({
    doctor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    roleID: DataTypes.TINYINT(1),
    // ... các trường khác của bảng Doctor
  }, {
    sequelize,
    modelName: 'Doctor',
    tableName:'doctors',
    timestamps: true,
    paranoid: true,
  });

  return Doctor;
};
