/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('departments', function (table) {
        table.integer('department_id').primary()
        table.string('department')
        table.integer('admin_id').unsigned()
        table.foreign('admin_id').references('person_id').inTable('health_data')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('departments')
}
