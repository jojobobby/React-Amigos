const Express = require('express');
const Router = Express.Router();
const cookieParser = require('cookie-parser');

Router.post("/test", (req, res) => {
    const response = { test: "testing" }

    res.status(200).json(response);
})

module.exports = Router;