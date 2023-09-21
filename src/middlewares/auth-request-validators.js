const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: 'Email and password are required'
        })
    }
    next();
}

module.exports = {
    validateUserAuth
}
