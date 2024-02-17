const usersData = require('./01-usersData.json')

exports.seed = function (knex) {
    return knex
        .raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
        .then(function () {
            return knex('users').insert(usersData)
        })
        .catch(function (error) {
            console.error('Error seeding data:', error)
        })
}
