const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const userService = require('./services/user-service');

// const db = require('./models/index');

// const {User, Role} = require('./models/index');

const prepareAndStartServer = () => {
    app.listen(PORT , async () => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/api', apiRoutes); 

        // const u1 = await User.findByPk(3);
        // const r1 = await Role.findByPk(2);
        // u1.addRole(r1);


        // const response = await r1.getUsers();
        // console.log(response);

        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({alter:true});
        // }

        // const service = new userService();
        // const newToken = service.createToken({
        //     email: 'subrat@admin.com',
        //     id: 1
        // })

        // console.log("New token is", newToken);

        // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1YnJhdEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjk1MjE3MjI5LCJleHAiOjE2OTUyMjA4Mjl9.ZmjGeGIJ5X5sH1jvA8SnRPsse_0qlZE-eQdd8xB-UIM`;

        // const res = service.verifyToken(token);
        // console.log(res);

        console.log(`Server Started on ${PORT}`);
    })
}


prepareAndStartServer();