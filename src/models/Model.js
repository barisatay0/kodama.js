const {DataTypes} = require('sequelize');
const {sequelize} = require('../../config/Database');

const Model = sequelize.define('Model',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        tableName: '',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
);

module.exports = {Model};