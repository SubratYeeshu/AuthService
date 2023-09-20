const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');


const prepareAndStartServer = () => {
    app.listen(PORT , () => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/api', apiRoutes); 

        console.log(PORT);
        console.log(`Server Started on ${PORT}`);
    })
}


prepareAndStartServer();