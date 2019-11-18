'use strict';

const path = require('path');
const { PUBLIC_DIR } = require('./constants');

module.exports.set = function(app) {
    app.get('/', (request, response) => {
        response.sendFile(path.resolve(PUBLIC_DIR, 'index.html'));
    });
};
