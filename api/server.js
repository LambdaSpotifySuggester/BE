const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const authRouter = require('../auth/auth-router');
const userRouter = require('../user/users-router');
const songRouter = require('../songs/songs-router');
const artistRouter = require('../artists/artist-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);
server.use('/api/songs', songRouter);
server.use('/api/artists', artistRouter);

module.exports = server;
