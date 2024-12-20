const {DataTypes} = require('sequelize');
const {sequelize} = require('../../config/Database');

const variable = sequelize.define('variable',
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
        tableName: 'variant_tb',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
);

module.exports = {variable};