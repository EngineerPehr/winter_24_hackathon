/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('health_data', function (table) {
        table.increments('person_id').primary()
        table.string('gender', 10)
        table.integer('age', 3)
        table.string('occupation', 40)
        table.decimal('sleep_duration', 3, 1)
        table.integer('quality_of_sleep', 2)
        table.integer('physical_activity_level', 3)
        table.integer('stress_level', 2)
        table.string('bmi_category', 20)
        table.string('blood_pressure', 10)
        table.integer('heart_rate', 3)
        table.integer('daily_steps', 6)
        table.string('sleep_disorder', 40)

        // ...
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('health_data')
}

// migrations/YYYYMMDDHHMMSS_migration_name.js
