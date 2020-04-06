exports.seed = async function(knex) {
	await knex('songs').insert([
		{ song_name: 'Ascension' },
		{ song_name: 'Godzilla' },
		{ song_name: 'Hurricane' },
		{ song_name: 'Killshot' },
		{ song_name: 'Pretty Wings' },
		{ song_name: 'Beautiful Crazy' }
	]);
};
