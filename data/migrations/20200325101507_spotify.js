exports.up = async function(knex) {
	await knex.schema.createTable('users', (tbl) => {
		tbl.increments('id');
		tbl.text('username').notNull().unique();
		tbl.text('password').notNull().unique();
	});

	await knex.schema.createTable('artists', (tbl) => {
		tbl.increments('id');
		tbl.text('name').notNull();
	});

	await knex.schema.createTable('songs', (tbl) => {
		tbl.increments('id');
		tbl.string('name').notNull();
		tbl.integer('artist_id').references('id').inTable('artists').onUpdate('CASCADE').onDelete('CASCADE').notNull();
	});

	await knex.schema.createTable('favorites', (tbl) => {
		tbl.increments('id');
		tbl.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
		tbl.integer('song_id').references('id').inTable('songs').onUpdate('CASCADE').onDelete('CASCADE');
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('favorites');
	await knex.schema.dropTableIfExists('songs');
	await knex.schema.dropTableIfExists('artists');
	await knex.schema.dropTableIfExists('users');
};
