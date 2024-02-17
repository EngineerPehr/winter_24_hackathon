/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.integer('person_id').primary()
        table
            .foreign('person_id')
            .references('person_id')
            .inTable('health_data')
        table.string('username')
        table.string('gender')
        table.boolean('admin')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
