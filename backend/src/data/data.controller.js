const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./data.service')

async function healthDataExists(req, res, next) {
    const { personId } = req.params
    const data = await service.read(personId)

    if (!data) {
        return next({
            status: 404,
            message: `Health data for Person ID '${personId}' does not exist`,
        })
    } else {
        res.locals.healthData = data
        next()
    }
}

async function list(req, res) {
    const data = await service.list()
    res.json({ data })
}

async function create(req, res, next) {
    const requestHealthData = req.body.data
    const newHealthData = {
        ...requestHealthData,
    }
    try {
        const data = await service.create(newHealthData)
        res.status(201).json({ data })
    } catch (error) {
        next(error)
    }
}

function read(req, res, next) {
    const data = res.locals.healthData
    res.json({ data })
}

async function deleteHealthData(req, res, next) {
    const { personId } = req.params
    await service.deleteHealthData(personId)
    res.sendStatus(204)
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: [asyncErrorBoundary(healthDataExists), read],
    deleteHealthData: [
        asyncErrorBoundary(healthDataExists),
        asyncErrorBoundary(deleteHealthData),
    ],
}
