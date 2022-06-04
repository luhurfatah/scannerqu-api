const Hapi = require('@hapi/hapi');
const fileHandler = require('./handler');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const server = Hapi.server({
    host: 'localhost', 
    port: port,
});

server.route({
    method: 'POST',
    path: '/submit',
    handler: fileHandler,
    options: {
        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data',
            multipart: true
        }
    }
});

const init = async () => {

        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
};

init();