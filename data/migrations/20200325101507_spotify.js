exports.up = async function(knex) {
	await knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.text('username').notNullabe().unique();
		tbl.text('password').notNullabe().unique();
	});

	await knex.schema.createTable();
};

exports.down = function(knex) {};
