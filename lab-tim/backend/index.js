'use strict';

//const debug = require('debug')('http:index');
//const server = require('./lib/server');
require('dotenv').config();
require('./lib/server').start();
//server.start();

//listen(PORT, () => debug(`Listening on ${PORT}`));
