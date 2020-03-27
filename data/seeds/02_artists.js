exports.seed = async function(knex) {
	await knex('artists').insert([ { name: 'Eminem' }, { name: 'Maxwell' }, { name: 'Luke Combs' } ]);
};
