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
        table.string('username').nullable()
        table.string('gender').nullable()
        table.boolean('admin').nullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
