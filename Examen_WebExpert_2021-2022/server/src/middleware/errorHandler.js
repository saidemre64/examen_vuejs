const errorHandler = (error, req, res, next) => {
    res.status(400).send({
        message: error.message
    });
    next();
};

module.exports = {
    errorHandler
};