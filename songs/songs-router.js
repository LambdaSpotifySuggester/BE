const express = require('express');
const db = require('../data/config');
const Songs = require('./songs-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await db('songs'));
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const song = await Songs.getById(req.params.id);
		console.log(song);
		if (!song) {
			return res.status(404).json({
				message: 'Song not found'
			});
		}
		res.json(song);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const song = await Songs.insert(req.body);
		res.status(201).json(song);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
