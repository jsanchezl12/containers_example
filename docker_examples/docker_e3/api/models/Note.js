const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Note = sequelize.define('Note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Note.belongsTo(User, { foreignKey: 'userId' });

module.exports = Note;
