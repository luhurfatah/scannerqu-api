const fs = require("fs");

const fileHandler = (request, h) => {
  const data = request.payload;
  if (data.file) {
    const name = data.file.hapi.filename;
    const path = "./uploads/" + name;
    const file = fs.createWriteStream(path);

    file.on("error", (err) => console.error(err));

    data.file.pipe(file);

    data.file.on("end", (err) => {
      const ret = {
        filename: data.file.hapi.filename,
        headers: data.file.hapi.headers,
      };
      return JSON.stringify(ret);
    });
    return path;
  }
};

const frontHandler = (request, h) => {
    return h.response("<h1>Hello World </h1>")
}
module.exports = {fileHandler, frontHandler};
