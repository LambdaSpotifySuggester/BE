exports.seed = async function(knex) {
	await knex('songs').insert([
		{ name: 'Godzilla', artist_id: 1 },
		{ name: 'Ascension', artist_id: 2 },
		{ name: 'Hurricane', artist_id: 3 },
		{ name: 'Fall', artist_id: 1 },
		{ name: 'Pretty Wings', artist_id: 2 },
		{ name: "Even Though I'm Leaving", artist_id: 3 }
	]);
};
