const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    next();
};

module.exports = authenticateUser;