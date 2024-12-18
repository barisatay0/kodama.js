const {index, create, read, update, remove} = require('../services/variableService');

async function indexController(req, res) {
    try {
        const variant = await index();
        return res.status(200).json({status: 200, message: 'Success', data: variant});
    } catch (error) {
        console.log('indexController Error', error);
        return res.status(500).json({
            message: 'An error occurred while trying to retrieve variant',
            error: error.message
        });
    }
}

async function createController(req, res) {
    try {
        const variant = await create(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: variant});
    } catch (error) {
        console.log('createController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to create variant ', error: error.message});
    }
}

async function readController(req, res) {
    try {
        const variant = await read(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: variant});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show // ', error: error.message});
    }
}

async function updateController(req, res) {
    try {
        const variant = await update(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: variant});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show Controller ', error: error.message});
    }
}

async function removeController(req, res) {
    try {
        const variant = await remove(req.body);
        return res.status(200).json({status: 200, message: 'Success', data: variant});
    } catch (error) {
        console.log('readController Error', error);
        return res.status(500).json({message: 'An error occurred while trying to show Controller ', error: error.message});
    }
}

module.exports = {
    indexController,
    createController,
    readController,
    updateController,
    removeController
};