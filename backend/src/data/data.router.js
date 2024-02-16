const router = require('express').Router({ mergeParams: true })
const controller = require('./data.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router