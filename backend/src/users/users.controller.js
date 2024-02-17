const { as } = require('../db/connection')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./users.service')

async function userExists(req, res, next) {
    const { personId } = req.params
    const data = await service.read(personId)

    if (!data) {
        return next({
            status: 404,
            message: `User with ID # '${personId}' does not exist`,
        })
    } else {
        res.locals.userData = data
        next()
    }
}

async function list(req, res) {
    try {
        const data = await service.list()
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error accessing user' })
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
        res.status(500).json({ error: error.message || 'Error creating user' })
    }
}

function read(req, res, next) {
    try {
        const data = res.locals.userData
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error reading user' })
    }
}

async function update(req, res) {
    try {
        const { person_id } = res.locals.userData
        const updatedUser = { ...req.body.data, person_id }
        // console.log('Updated User:', updatedUser)
        const result = await service.update(updatedUser)
        res.json({ data: result[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error updating user' })
    }
}

async function deleteUser(req, res, next) {
    try {
        const { personId } = req.params
        await service.deleteUser(personId)
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting user' })
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
    read: [asyncErrorBoundary(userExists), read],
    update: [asyncErrorBoundary(userExists), asyncErrorBoundary(update)],
    deleteUser: [
        asyncErrorBoundary(userExists),
        asyncErrorBoundary(deleteUser),
    ],
}
