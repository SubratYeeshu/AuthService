const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user-controller');
const {AuthRequestValidators} = require('../../middlewares/index');

router.post('/signup',
AuthRequestValidators.validateUserAuth,
 UserController.create);

router.post('/signin', 
AuthRequestValidators.validateUserAuth,UserController.signIn);

// Setting up api for checking if user is authenticated
router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
)

router.get('/dummy', (res, req) => {
    return res.status(200).json({
        message: "OK",
    })
})

module.exports = router; 