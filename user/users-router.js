const express = require('express');
const Users = require('./users-model');
const restrict = require('../middleware/restrict');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await Users.find());
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const favs = await Users.getFavorites(id);
		res.status(200).json(favs);
		console.log(req.user);
	} catch (err) {
		next(err);
	}
});

router.get('/:id/favorites', async (req, res, next) => {
	try {
		res.json(await Users.getFavorites(req.params.id));
		console.log('params', req.params.id);
	} catch (err) {
		next(err);
	}
});

router.post('/:id/favorites', async (req, res, next) => {
	try {
		const favs = await Users.addFavorites(req.body);
		res.status(201).json(favs);
	} catch (err) {
		next(err);
	}
});
router.delete('/:id', restrict(), async (req, res, next) => {
	try {
		const { id } = req.params;
		await db('users').where({ id }).del();
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
