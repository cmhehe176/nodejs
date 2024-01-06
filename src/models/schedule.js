// Trong file schedule.js trong thư mục models

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      // Define associations here
      Schedule.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
    }
  }
  
  Schedule.init({
    schedule_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    schedule_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    // ... các trường khác của bảng Schedule
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName:'Schedules',
    timestamps: true,
    paranoid: true,
  });

  return Schedule;
};
