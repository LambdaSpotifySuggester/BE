exports.seed = async function(knex) {
	await knex('favorites').truncate();
	await knex('songs').truncate();
	await knex('artists').truncate();
	await knex('users').truncate();
};
