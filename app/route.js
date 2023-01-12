const {  songsRoute } = require('./api')

module.exports = (server) =>{
    server.use('/songs', songsRoute);
}