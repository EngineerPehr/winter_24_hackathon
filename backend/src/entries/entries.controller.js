const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./entries.service')

function validateField (value, type, criteria) {
    switch (type) {
        case 'string':
            return (
                typeof value === 'string' && value.length <= criteria.maxLength
            )
        case 'boolean':
            return typeof value === 'boolean'
        case 'number':
            return (
                typeof value === 'number' &&
                value >= criteria.min &&
                value <= criteria.max
            )
        default:
            return false
    }
}

function validateEnum (value, validValues) {
    return validValues.includes(value)
}

function validateDate (value) {
    const currentDate = new Date()
    const inputDate = new Date(value)

    return inputDate <= currentDate
}

function validateInput (req, res, next) {
    const validationRules = {
        /*
        username: { type: 'string', maxLength: 50 },
        admin: { type: 'boolean' },
        gender: { type: 'string', enum: ['Male', 'Female'] },
        age: { type: 'number', min: 0, max: 200 },
        */
        sleep_duration: { type: 'number', min: 0, max: 24 },
        //quality_of_sleep: { type: 'number', min: 1, max: 10 },
        //physical_activity_level: { type: 'number', min: 0, max: 1440 },
        stress_level: { type: 'number', min: 1, max: 10 },
        /*
        bmi_category: {
            type: 'string',
            enum: ['Underweight', 'Normal', 'Overweight'],
        },
        */
        //blood_pressure: { type: 'string' },
        heart_rate: { type: 'number', min: 20, max: 600 },
        daily_steps: { type: 'number', min: 0, max: 100000 },
        /*
        sleep_disorder: {
            type: 'string',
            enum: ['None', 'Insomnia', 'Sleep Apnea'],
        },
        */
        date: { type: 'string', custom: validateDate },
    }

    for (const field in validationRules) {
        const value = req.body.data[field]
        const {
            type,
            maxLength,
            enum: validValues,
            min,
            max,
            custom,
        } = validationRules[field]
        

        if (
            !validateField(value, type, { maxLength, min, max }) ||
            (validValues && !validateEnum(value, validValues)) ||
            (custom && !custom(value))
        ) {
            return res.status(400).json({ error: `Invalid ${field}` })
        }
    }

    next()
}

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
    create: [validateInput, asyncErrorBoundary(create)],
    readEntry: [asyncErrorBoundary(entryExists), readEntry],
    readPerson: [asyncErrorBoundary(personExists), readPerson],
    update: [
        validateInput,
        asyncErrorBoundary(entryExists),
        asyncErrorBoundary(update),
    ],
    deleteEntry: [
        asyncErrorBoundary(entryExists),
        asyncErrorBoundary(deleteEntry),
    ],
}
