const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');

const prepareAndStartServer = () => {
    app.listen(PORT , () => {
        console.log(PORT);
        console.log(`Server Started on ${PORT}`);
    })
}


prepareAndStartServer();