const express = require('express');
const db = require('../data/config');
const Artists = require('./artist-model');

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
		const songs = await db('songs as s', 's.a_id', 'a.id').join('artists as a').select('s.name', 'a.name');

		res.json(songs);
	} catch (err) {
		next();
	}
});

router.post('/', async (req, res, next) => {
	try {
		const artist = await Artists.insert(req.body);
		return res.status(201).json(artist);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
