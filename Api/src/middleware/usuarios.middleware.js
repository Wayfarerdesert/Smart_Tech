function verificaToken(req, res, next) {
    const bearerHeader = req.headers['autorizacion'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = verificaToken