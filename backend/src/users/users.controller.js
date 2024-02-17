const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./users.service')

async function list(req, res) {
    try {
        const data = await service.list()
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error accessing user data' })
    }
}

async function create(req, res, next) {
    const requestUserData = req.body.data
    const newUserData = { ...requestUserData }

    try {
        const data = await service.create(newUserData)
        res.status(201).json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error creating user data' })
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
}
