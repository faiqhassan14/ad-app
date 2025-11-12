const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING }, // hashed
  isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
  googleId: { type: DataTypes.STRING }
});

module.exports = User;
