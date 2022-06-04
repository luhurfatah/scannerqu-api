const Hapi = require('@hapi/hapi');
const { routes } = require('./routes');

const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    port: 5000,
});

server.route(routes);

const init = async () => {

        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
};

init();