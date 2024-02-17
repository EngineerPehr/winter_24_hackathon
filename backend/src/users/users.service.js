const knex = require('../db/connection')

function list() {
    return knex('users').select('*').orderBy('person_id')
}

function create(newUserData) {
    return knex('users')
        .insert(newUserData)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
}

module.exports = {
    list,
    create,
}
