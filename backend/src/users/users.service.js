const knex = require('../db/connection')

function list() {
    return knex('users').select('*').orderBy('person_id')
}

function create(newUserData) {
    console.log('Input data:', newUserData)

    return knex('users')
        .insert(newUserData)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
        .catch((error) => {
            console.error('Error creating user:', error)
            throw error
        })
}

function read(personId) {
    return knex('users').where({ person_id: personId }).first()
}

function update(updatedUserData) {
    return knex('users')
        .where({ person_id: updatedUserData.person_id })
        .update(updatedUserData, '*')
}

function deleteUser(personId) {
    return knex('users').where({ person_id: personId }).del()
}

module.exports = {
    list,
    create,
    read,
    update,
    deleteUser,
}
