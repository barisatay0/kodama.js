const {DataTypes} = require('sequelize');
const {sequelize} = require('../../config/database');

const City = sequelize.define('City',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        city_name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        tableName: 'tb_city',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
);

module.exports = {City};