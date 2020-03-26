const express = require('express');
const Users = require('./users-model');
const restrict = require('../middleware/restrict');
const db = require('../data/config');

const router = express.Router();

router.get('/', restrict(), async (req, res, next) => {
	try {
		res.json(await Users.find());
	} catch (err) {
		next(err);
	}
});

router.get('/:id', restrict(), async (req, res, next) => {
	try {
		res.json(req.user);
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
