const express = require('express');
// const db = require('../data/config');
const Artists = require('./artist-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await User.findById('artists'));
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const artist = await db('artists').where('id', req.params.id).first();
		if (!song) {
			return res.status(404).json({
				message: 'Artist not found'
			});
		}
		res.json(artist);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const artist = await Artists.insert(req.body);
		res.status(201).json(artist);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
