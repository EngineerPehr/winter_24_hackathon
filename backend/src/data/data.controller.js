const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./data.service')

async function list (req, res) {
    const data = await service.list()
    res.json({ data })
}

module.exports = {
    list: asyncErrorBoundary(list),
}
