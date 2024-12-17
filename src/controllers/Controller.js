const {index, create, read, update, remove, search} = require('../services/');

async function indexController(req, res) {
    try {
        const // = await index();
        return res.status(200).json({status: 200, message: 'Success', data: //});
    } catch (error) {
        console.log('indexController Error', error);
        return res.status(500).json({
            message: 'An error occurred while trying to retrieve //',
            error: error.message
        });
    }
}

async function createController(req, res) {
    try {
        const // = await create(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: //});
    } catch (error) {
        console.log('createController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to create // ', error: error.message});
    }
}

async function readController(req, res) {
    try {
        const // = await read(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: //});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show // ', error: error.message});
    }
}

async function updateController(req, res) {
    try {
        const // = await update(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: //});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show // ', error: error.message});
    }
}

async function removeController(req, res) {
    try {
        const // = await remove(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: //});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show // ', error: error.message});
    }
}

async function searchController(req, res) {
    try {
        const // = await search(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: //});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show // ', error: error.message});
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