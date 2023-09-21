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

    async signIn(email, plainPassword){
        try {
            // step 1 : fetch user using email
            const user = await this.userRepository.getByEmail(email);

            // step 2 : compare password
            const passwordMatch = await this.checkPassword(plainPassword, user.password);

            if(!passwordMatch){
                console.log("Password does not match");
                throw {
                    error : "Password does not match"
                }
            }

            // step 3 : create token
            const newJWT = this.createToken({
                email: user.email,
                id: user.id
            });

            return newJWT;


        } catch (error) {
            console.log("Something went wrong in service layer");
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

    async isAuthenticated(token){
        try {
            const isTokeVerified = this.verifyToken(token);
            if(!isTokeVerified){
                throw {error : 'Invalid Token'}
            }
            // For checking if user exist or not
            const user = await this.userRepository.getById(isTokeVerified.id);
            if(!user){
                throw {error : 'No user with the corresponding token exist'};
            }
            return user.id;

        } catch (error) {
            console.log("Something went wrong in password comparison");
                throw error;
        }
    }

}



module.exports = UserService;