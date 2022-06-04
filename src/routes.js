const { handleFileUpload } = require("./handler");
const fs = require("fs");

const routes = [
    {
        method: "POST",
        path: "/",
        config: {
            payload: {
                output: "stream",
                parse: true,
                allow: "multipart/form-data",
                multipart: true,
                maxBytes: 2 * 1000 * 1000
            }
        },
        handler: (request, response) => {
            var result = [];
            for(var i = 0; i < request.payload["file"].length; i++) {
                result.push(request.payload["file"][i].hapi);
                request.payload["file"][i].pipe(fs.createWriteStream(__dirname + "/uploads/" + request.payload["file"][i].hapi.filename))
            }
            response.response(result);
        }
    }
];

module.exports = routes;
