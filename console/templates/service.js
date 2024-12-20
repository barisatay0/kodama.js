const {variable} = require('../../src/models');

async function index() {
    return await variable.findAll();
}

async function create(data) {
    return variable.create(data);
}

async function read(data) {
    return variable.findByPk(data.id);
}

async function update(data) {
    return variable.update(data, {where: {id: data.id}});
}

async function remove(data) {
    return variable.destroy({where: {id: data.id}});
}

module.exports = {index, create, read, update, remove};