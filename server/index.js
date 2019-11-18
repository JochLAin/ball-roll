#!/bin/node

'use strict';

const cors = require('cors');
const express = require('express');
const path = require('path');
const URL = require('url');
const { PORT, PUBLIC_DIR } = require('./constants');

const origin = (_origin, callback) => {
    if ([URL.parse(process.env.APP_DOMAIN).host].includes(URL.parse(_origin).host)) {
        return callback('Origin not allowed', false);
    }
    callback(null, true);
};

// Configure express
const app = express();
// app.use(cors({ origin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')());
app.use('/js/', express.static(path.resolve(PUBLIC_DIR, 'js')));

require('./routes').set(app);

const http = require('http').Server(app);
const io = require('socket.io')(http);
require('./io').set(io);
io.origins(origin);

http.listen(PORT, () => {
    console.log('Starting Server on 0.0.0.0:' + PORT)
});
