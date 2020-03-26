const db = require('../data/config');
const bcrypt = require('bcryptjs');

async function add(user) {
	user.password = await bcrypt.hash(user.password, 14);

	const [ id ] = await db('users').insert(user);
}
