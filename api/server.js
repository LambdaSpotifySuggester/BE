const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const authRouter = require('../auth/auth-router');
const userRouter = require('../user/users-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);

module.exports = server;
