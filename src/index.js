const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

// const UserRepository = require('./repository/user-repository');

const prepareAndStartServer = () => {
    app.listen(PORT , async () => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/api', apiRoutes); 

        // const repo = new UserRepository();
        // const response = await repo.getById(1);

        // console.log(response);
        console.log(`Server Started on ${PORT}`);
    })
}


prepareAndStartServer();