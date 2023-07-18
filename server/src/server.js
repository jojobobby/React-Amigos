const { PrismaClient } = require('@prisma/client');
const port = process.env.SERVER_PORT;
const debug = process.env.SERVER_DEBUG;

const prisma = new PrismaClient();
const Express = require('express');
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const Cors = require('cors');
const App = Express();

const routes = require("./route/login_route")
const middleware = require("./middleware/server_middleware");

App.use(BodyParser.urlencoded({ extended: false }));
App.use(Cors());
App.use(CookieParser());

App.use(async (req, res, next) => {
    if (debug) {
        let address = req.socket.remoteAddress == "::1" ? `127.0.0.1` : req.socket.remoteAddress;

        const connected = await prisma.user.findFirst({
            where: {
                address: address
            }
        })

        if (connected) {
            await prisma.user.update({
                where: {
                    id: connected.id,
                },
                data: {
                    connections: {
                        increment: 1,
                    },
                }
            })

            console.log(`user: ${address} has connected ${connected.connections++} times.\n  routing towards -> ${req.originalUrl}`)
        } else {
            await prisma.user.create({
                data: {
                    address: address,
                    connections: 1,
                    name: "",
                    email: "",
                }
            })

            console.log(`user: ${address} has connected for the first time.`)
        }
    }   
    next();
});

App.use("/api", routes)
  
App.listen(port, () => console.log(`Server listening on port: ${port}`));