const { frontHandler, fileHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/submit",
    handler: fileHandler,
    options: {
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },

  {
      method: 'GET',
      path: "/",
      handler: frontHandler
  }
];


module.exports = {routes}