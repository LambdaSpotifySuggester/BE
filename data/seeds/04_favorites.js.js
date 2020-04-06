exports.seed = async function(knex) {
	await knex('favorites').insert([
		{ song_id: 1, artist_id: 2 },
		{ song_id: 2, artist_id: 1 },
		{ song_id: 3, artist_id: 3 },
		{ song_id: 4, artist_id: 1 },
		{ song_id: 1, artist_id: 2 },
		{ song_id: 1, artist_id: 3 }
	]);
};
