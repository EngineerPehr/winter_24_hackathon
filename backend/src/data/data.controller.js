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
    try {
        const data = await service.list()
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error accessing health data' })
    }
}

async function create(req, res, next) {
    const requestHealthData = req.body.data
    const newHealthData = { ...requestHealthData }

    try {
        const data = await service.create(newHealthData)
        res.status(201).json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error creating health data' })
    }
}

function read(req, res, next) {
    try {
        const data = res.locals.healthData
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error reading health data' })
    }
}

async function update(req, res) {
    try {
        const { person_id } = res.locals.healthData
        const updatedHealthData = { ...req.body.data, person_id }
        // console.log('Updated Health Data:', updatedHealthData)
        const result = await service.update(updatedHealthData)
        res.json({ data: result[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error updating health data' })
    }
}

async function deleteHealthData(req, res, next) {
    try {
        const { personId } = req.params
        await service.deleteHealthData(personId)
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting health data' })
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: [asyncErrorBoundary(healthDataExists), read],
    update: [asyncErrorBoundary(healthDataExists), asyncErrorBoundary(update)],
    deleteHealthData: [
        asyncErrorBoundary(healthDataExists),
        asyncErrorBoundary(deleteHealthData),
    ],
}
