const http = require("http");
const { randomUUID } = require("crypto");

const users = [];

const server = http.createServer((request, response) => {
  const METHOD = request.method;
  const URL = request.url;

  if (URL.startsWith("/users") ) {
    if (METHOD === "POST") {
      request.on("data", (data) => {
        const body = JSON.parse(data);

        const user = {
          ...body,
          id: randomUUID(),
        };

        users.push(user);

        console.log(user);
        return response.end(JSON.stringify(user));
      });
    }

    if (METHOD === "GET") {
      return response.end(JSON.stringify(users));
    }

    if (METHOD === "PUT") {
      const paramSplit = URL.split("/")
      const id = paramSplit[2]

      request.on("data", (data) => {
        const body = JSON.parse(data);
        const userIndex = users.findIndex(user => user.id ===id);

        if(userIndex <= -1){
          return response.end(JSON.stringify({
            msg: "Usuário não encontrado"
          }));
        }

        users[userIndex]={
          ...body,
          id
        }
      }).on("end", ()=>{
        return response.end(JSON.stringify({
          msg: "Usuário alterado com sucesso!"
        }))
      })


    }
  }
});

server.listen(3333, () => console.log("Server Up"));
process.on("uncaughtException", (err) => console.log(`Erro no Servidor ${err}`))