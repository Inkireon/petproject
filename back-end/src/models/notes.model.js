const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const Note = sequelize.define("Note", {
  id: {
    type: DataTypes.UUID, // Use UUID for unique IDs
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings for tags
    allowNull: true,
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true, // Automatically add `createdAt` and `updatedAt`
  tableName: "notes",
});

module.exports = Note;
