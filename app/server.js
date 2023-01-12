const express = require('express')
const path = require('path');
const restServer = require('./commons/apiServer');
const routes = require('./route')
const { internalError } = require('./commons/utils/response-format/format');
const name = "Media Player App";


/**
 * Middleware for handle restful API error
 *
 * @param  {Object} error - Error instance
 * @param  {Object} req - Requests
 * @param  {Object} res - Response
 * @param  {Object} next - Next
 */

const errorHandler = (error, req,res,next) =>{
    console.log(error, `${error.message}`)
    if(error.message) {
        error.code = res.status;
    } else if(error.name && !error.message) {
        error.message = error.name
    }
    res.body = error
    internalError(req, res, error);
    next();

}

const server = restServer(
    {
        name,
    },
    
);

server.use(express.static(path.resolve(__dirname, '../assets')));

const startServer = async() => {
    routes(server)
    server.use(errorHandler)
    server.listen(3003, () => console.log(name, 3003));

};

module.exports = {server, startServer, errorHandler}

if(require.main === module) {
    startServer().catch(err => console.log(err, 'There was a problem starting the server'));
}