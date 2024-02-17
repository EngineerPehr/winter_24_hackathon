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
        table.string('name')
        table.string('username')
        table.string('password')
        table.integer('department_id').unsigned()
        table
            .foreign('department_id')
            .references('department_id')
            .inTable('departments')
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
