const http = require("http");

const handler = require("./handlerRoutes");

const server = http.createServer(handler);

server.listen(3333, () => console.log("Server Up"));
process.on("uncaughtException", (err) =>
  console.log(`Erro no Servidor ${err}`)
);
