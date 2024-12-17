const {City} = require('../models');
const {Op} = require("sequelize");

async function index() {
    return await City.findAll();
}

async function create(data) {
    return City.create(data);
}

async function read(data) {
    return City.findByPk(data.id);
}

async function update(data) {
    return City.update(data, {where: {id: data.id}});
}

async function remove(data) {
    return City.destroy({where: {id: data.id}});
}

async function search(data) {
    return City.findAll({where: {city_name: {[Op.like]: `%${data}%`}}});
}

module.exports = {index, create, read, update, remove, search};