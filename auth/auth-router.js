const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../user/users-model');
const restrict = require('../middleware/restrict');

const router = express.Router();

router.post('/register', async (req, res, next) => {
	try {
		const { username } = req.body;
		const user = await Users.findBy({ username }).first();

		if (user) {
			return res.status(409).json({
				message: 'Username is already taken'
			});
		}

		res.status(201).json(await Users.add(req.body));
	} catch (err) {
		next(err);
	}
});

router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await Users.findBy({ username }).first();
		const passValid = await bcrypt.compare(password, user.password);

		if (!user || !passValid) {
			return res.status(401).json({
				message: 'Invalid credentials, sucka'
			});
		}

		const payload = {
			subject: user.id,
			username: user.username
		};
		const options = {
			expiresIn: '1d'
		};

		const token = jwt.sign(payload, process.JWT_SECRET, options);

		res.cookie('token', token);

		res.json({
			message: `Welcome ${user.username}`
		});
	} catch (err) {
		next(err);
	}
});

//create logout route

module.exports = router;
