exports.up = async function(knex) {
	await knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.text('username').notNullabe().unique();
		tbl.text('password').notNullabe().unique();
	});

	await knex.schema.createTable('songs', (tbl) => {
		tbl.increments();
		tbl.text('name').notNullabe();
	});

	await knex.schema.createTable('artists', (tbl) => {
		tbl.increments();
		tbl.string('name').notNullabe();
	});
};

exports.down = function(knex) {};
