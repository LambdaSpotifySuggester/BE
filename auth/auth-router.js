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
		const success = await Users.add(req.body);
		console.log(success);
		if (success) {
			const payload = {
				UserId: success.id
			};

			const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

			res.status(201).json({ token: token });
		}
	} catch (err) {
		next(err);
	}
});

router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await Users.findBy({ username }).first();
		console.log('user', user);

		if (!user) {
			return res.status(401).json({
				message: 'Invalid credentials, sucka'
			});
		}
		const passValid = await bcrypt.compare(password, user.password);

		if (!passValid) {
			return res.status(401).json({
				message: 'Invalid credentials, sucka'
			});
		}
		const payload = {
			UserId: user.id
		};

		const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

		res.json({
			message: `Welcome ${user.username}`,
			token: token
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
