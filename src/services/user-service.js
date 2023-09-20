const UserRepository = require('../repository/user-repository');

const bcrpyt = require('bcrypt');

const {JWT_KEY} = require('../config/serverConfig');

const jwt = require('jsonwebtoken');

class UserService{
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on service layer");
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encyrptedPassword){
        try {
            return bcrpyt.compare(userInputPlainPassword, encyrptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }

}

module.exports = UserService;