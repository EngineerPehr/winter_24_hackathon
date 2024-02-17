const knex = require('../db/connection')

function list() {
    return knex('health_data').select('*').orderBy('person_id')
}

async function create(newHealthData) {
    return knex.transaction(async (trx) => {
        try {
            // Step 1: Insert into health_data table
            const [healthData] = await trx('health_data')
                .insert(newHealthData)
                .returning('*')

            // Step 2: Insert into users table using the generated person_id
            const [user] = await trx('users')
                .insert({
                    person_id: healthData.person_id,
                    // Add other user fields as needed
                })
                .returning(['person_id', 'username', 'gender', 'admin'])

            return { healthData, user }
        } catch (error) {
            console.error('Error creating health data:', error)
            throw error // Rethrow the error to be caught in the controller
        }
    })
}

function read(personId) {
    return knex('health_data').where({ person_id: personId }).first()
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
