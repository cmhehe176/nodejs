// Trong file medicalHistory.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    static associate(models) {
      // Define associations here
      MedicalHistory.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      MedicalHistory.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  
  MedicalHistory.init({
    medical_history_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    diagnosis: DataTypes.STRING,
    prescription: DataTypes.STRING,
    // ... các trường khác của bảng MedicalHistory
  }, {
    sequelize,
    modelName: 'MedicalHistory',
    tableName: 'MedicalHistorys',
    timestamps: true,
    paranoid: true,
  });

  return MedicalHistory;
};
