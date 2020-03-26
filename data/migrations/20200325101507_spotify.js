exports.up = async function(knex) {
	await knex.schema.createTable('users', (tbl) => {
		tbl.increments('id');
		tbl.text('username').notNullabe().unique();
		tbl.text('password').notNullabe().unique();
	});

	await knex.schema.createTable('songs', (tbl) => {
		tbl.increments('id');
		tbl.text('name').notNullabe();
	});

	await knex.schema.createTable('artists', (tbl) => {
		tbl.increments('id');
		tbl.text('name');
	});

	await knex.schema.createTable('artists', (tbl) => {
		tbl.increments('id');
		tbl.string('name').notNullabe();
		tbl.integer('artist_id').references('id').inTable('artists').onUpdate('CASCADE').onDelete('CASCADE');
	});

	await knex.schema.createTable('favorites', (tbl) => {
		tbl.increments('id');
		tbl.integer('song_id').references('id').inTable('songss').onUpdate('CASCADE').onDelete('CASCADE');
		tbl.integer('artist_id').references('id').inTable('artists').onUpdate('CASCADE').onDelete('CASCADE');
	});
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists('favorites')
    await knex.schema.dropTableIfExists('artists')
    await knex.schema.dropTableIfExists('songs')
    await knex.schema.dropTableIfExists('users')
};
