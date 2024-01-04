'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {

        phone: DataTypes.INTEGER,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        description: DataTypes.TEXT,
        gender: DataTypes.STRING,
        roleID: DataTypes.TINYINT(1),
        
        
        isActive: DataTypes.TINYINT(1),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
       
    });
    User.associate = function(models) {
       
        models.User.hasOne(models.Post);
        models.User.hasOne(models.Doctor_User, { foreignKey: 'doctorId' });
        models.User.hasMany(models.Patient, { foreignKey: 'doctorId' });
        models.User.hasMany(models.Schedule, { foreignKey: 'doctorId' });
        models.User.hasMany(models.Comment, { foreignKey: 'doctorId' });
    };

    return User;
};