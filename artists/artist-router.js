const express = require('express');
const db = require('../data/config');
const Artists = require('./artist-model');
const restrict = require('../middleware/restrict');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await Artists.find('artists'));
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const artist = await db('artists').where('id', req.params.id).first();
		if (!artist) {
			return res.status(404).json({
				message: 'Artist not found'
			});
		}
		res.json(artist);
	} catch (err) {
		next(err);
	}
});

router.get('/:id/songs', async (req, res, next) => {
	try {
		const songs = await Artists.findArtistSongs(req.params.id);

		if (!songs) {
			return res.status(404).json({
				message: 'Songs not found'
			});
		}

		res.json(songs);
	} catch (err) {
		next();
	}
});

router.post('/', async (req, res, next) => {
	console.log(req.body);
	try {
		const artist = await Artists.insert(req.body);
		return res.status(201).json(artist);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		await db('artists').where({ id }).del();
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
