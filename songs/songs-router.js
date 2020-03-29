const express = require('express');
const db = require('../data/config');
const Songs = require('./songs-model');
const restrict = require('../middleware/restrict');

const router = express.Router();

router.get('/', restrict(), async (req, res, next) => {
	try {
		res.json(await Songs.find('songs'));
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const song = await Songs.getById(req.params.id);
		console.log('song', song);
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
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		await db('songs').where({ id }).del();
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
