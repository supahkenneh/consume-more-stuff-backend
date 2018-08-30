
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('item_statuses', table => {
    table.string('rank').unique().alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('item_statuses', table => {
    table.string('rank').alter();
  });
};
