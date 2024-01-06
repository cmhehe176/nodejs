// Trong file appointment.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  
  Appointment.init({
    appointment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    appointment_date: DataTypes.DATE,
    // ... các trường khác của bảng Appointment
  }, {
    sequelize,
    modelName: 'Appointment',
    tableName:'Appointments',
    timestamps: true,
    paranoid: true,
  });

  return Appointment;
};
