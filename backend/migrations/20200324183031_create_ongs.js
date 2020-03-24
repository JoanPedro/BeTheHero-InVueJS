exports.up = function(knex, Promise) {
    return knex.schema.createTable('ongs', table => {
        table.increments('id').primary()
        
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('whatsapp').notNull()
        table.string('city').notNull()
        table.string('uf', 2).notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ongs')
};