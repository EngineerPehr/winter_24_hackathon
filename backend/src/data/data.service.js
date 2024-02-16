const knex = require('../db/connection')

function list () {
    return knex('health_data').select('*').orderBy('person_id')
}

module.exports = {
    list,
}
