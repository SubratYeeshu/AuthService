const dotenv = require('dotenv');
dotenv.config();

const bcrpyt = require('bcrypt'); 

module.exports = {
    PORT : process.env.PORT,
    SALT : bcrpyt.genSaltSync(10),
}