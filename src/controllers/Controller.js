const {index, create, read, update, remove, search} = require('../services/');

async function indexController(req, res) {
    try {
        const cities = await index();
        return res.status(200).json({status: 200, message: 'Success', data: cities});
    } catch (error) {
        console.log('indexController Error', error);
        return res.status(500).json({
            message: 'An error occurred while trying to retrieve cities',
            error: error.message
        });
    }
}

async function createController(req, res) {
    try {
        const city = await create(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: city});
    } catch (error) {
        console.log('createController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to create user ', error: error.message});
    }
}

async function readController(req, res) {
    try {
        const city = await read(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: city});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show user ', error: error.message});
    }
}

async function updateController(req, res) {
    try {
        const city = await update(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: city});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show user ', error: error.message});
    }
}

async function removeController(req, res) {
    try {
        const city = await remove(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: city});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show user ', error: error.message});
    }
}

async function searchController(req, res) {
    try {
        const city = await search(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: city});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show user ', error: error.message});
    }
}

module.exports = {
    indexController,
    createController,
    readController,
    updateController,
    removeController,
    searchController
};