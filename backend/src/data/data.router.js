const router = require('express').Router({ mergeParams: true })
const controller = require('./data.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

router
    .route('/:personId')
    .get(controller.read)
    .delete(controller.deleteHealthData)
    .all(methodNotAllowed)

module.exports = router
