const knex = require('../db/connection')

function list() {
    return knex('health_data').select('*').orderBy('person_id')
}

function create(newHealthData) {
    return knex('health_data')
        .insert(newHealthData)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
}

function read(personId) {
    return knex('health_data')
        .select('*')
        .where({ person_id: personId })
        .first()
}

function update(updatedHealthData) {
    return knex('health_data')
        .where({ person_id: updatedHealthData.person_id })
        .update(updatedHealthData, '*')
}

function deleteHealthData(personId) {
    return knex('health_data').where({ person_id: personId }).del()
}

module.exports = {
    list,
    create,
    read,
    update,
    deleteHealthData,
}
