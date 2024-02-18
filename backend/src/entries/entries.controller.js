const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./entries.service')

async function entryExists (req, res, next) {
    const { entryId } = req.params
    const data = await service.readEntry(entryId)

    if (!data) {
        return next({
            status: 404,
            message: `Log entry '${entryId}' does not exist`,
        })
    } else {
        res.locals.entryData = data
        next()
    }
}

async function personExists (req, res, next) {
    const { personId } = req.params
    const data = await service.readPerson(personId)

    if (!data) {
        return next({
            status: 404,
            message: `Person ID '${personId}' does not exist`,
        })
    } else {
        res.locals.userEntries = data
        next()
    }
}

async function list (req, res) {
    try {
        const data = await service.list()
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error accessing log entry' })
    }
}

async function create (req, res, next) {
    const requestEntryData = req.body.data
    const newEntryData = { ...requestEntryData }

    try {
        const data = await service.create(newEntryData)
        res.status(201).json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message || 'Error logging entry' })
    }
}

function readPerson (req, res, next) {
    try {
        const data = res.locals.userEntries
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error finding user logs' })
    }
}

function readEntry (req, res, next) {
    try {
        const data = res.locals.entryData
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error reading log entry' })
    }
}

async function update (req, res) {
    try {
        const { entry_id } = res.locals.entryData
        const updatedEntry = { ...req.body.data, entry_id }
        // console.log('Updated Entry:', updatedEntry)
        const result = await service.update(updatedEntry)
        res.json({ data: result[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error updating log entry' })
    }
}

async function deleteEntry (req, res, next) {
    try {
        const { entryId } = req.params
        await service.deleteUser(entryId)
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting entry' })
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    readEntry: [asyncErrorBoundary(entryExists), readEntry],
    readPerson: [asyncErrorBoundary(personExists), readPerson],
    update: [asyncErrorBoundary(entryExists), asyncErrorBoundary(update)],
    deleteEntry: [
        asyncErrorBoundary(entryExists),
        asyncErrorBoundary(deleteEntry),
    ],
}
