const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * Restify server with common configuration for REST Apis.
 *
 * @param {Object} opts - options for the Express server
 * @param {Object} logger
 * @returns {*|Server}
 */
const restServer = (opts, logger) => {
    const server = express();

    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser());

    process.on('uncaughtException', (error) => {
        // logger.error('Error: %s', error);
        console.log(error);

        if (error.stack) {
            console.error(error.stack);
        }
    });

    return server;
};

module.exports = restServer;

