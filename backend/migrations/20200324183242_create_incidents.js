exports.up = function(knex, Promise) {
    return knex.schema.createTable('incidents', table => {
        table.increments()
        
        table.string('title').notNull()
        table.string('description').notNull().unique()
        table.decimal('value').notNull()

        table.string('ong_id').notNull()

        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('incidents')
};