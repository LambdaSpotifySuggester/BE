exports.seed = async function(knex) {
	await knex('users').truncate();
	await knex('artists').truncate();
	await knex('songs').truncate();
	await knex('favorites').truncate();
};
