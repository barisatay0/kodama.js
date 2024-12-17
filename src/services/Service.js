const {//} = require('../Models');
const {Op} = require("sequelize");

async function index() {
    return await //.findAll();
}

async function create(data) {
    return //.create(data);
}

async function read(data) {
    return //.findByPk(data.id);
}

async function update(data) {
    return //.update(data, {where: {id: data.id}});
}

async function remove(data) {
    return //.destroy({where: {id: data.id}});
}

async function search(data) {
    return //.findAll({where: {name: {[Op.like]: `%${data}%`}}});
}

module.exports = {index, create, read, update, remove, search};