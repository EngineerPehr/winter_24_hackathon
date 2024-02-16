const knex = require('../db/connection')

function list () {
    return knex('health_data').select('*').orderBy('person_id')
}

function create (newHealthData) {
    return knex('health_data')
        .insert(newHealthData)
        .returning('*')
        .then(createdRecords => createdRecords[0])
}

function read (personId) {
    return knex('health_data')
        .select('*')
        .where({ person_id: personId })
        .first()
}

// function create (newHealthData) {
//     return knex('health_data')
//         .insert({
//             gender: newHealthData.gender,
//             age: newHealthData.age,
//             occupation: newHealthData.occupation,
//             sleep_duration: newHealthData.sleep_duration,
//             quality_of_sleep: newHealthData.quality_of_sleep,
//             physical_activity_level: newHealthData.physical_activity_level,
//             stress_level: newHealthData.stress_level,
//             bmi_category: newHealthData.bmi_category,
//             blood_pressure: newHealthData.blood_pressure,
//             heart_rate: newHealthData.heart_rate,
//             daily_steps: newHealthData.daily_steps,
//             sleep_disorder: newHealthData.sleep_disorder,
//         })
//         .returning('*')
//         .then(createdRecords => createdRecords[0])
// }

module.exports = {
    list,
    create,
    read,
}
