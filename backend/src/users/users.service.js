const knex = require("../db/connection");

function list() {
  return knex("user_health_data").select("*").orderBy("person_id");
}

module.exports = {
  list,
};
