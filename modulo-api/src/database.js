
const {Client} = require("pg")


const client = new Client({
  user: "admin",
  host: "localhost",
  database: "modulo_api_cursos",
  password: "admin",
  port: 5433
});

client.connect();

module.exports ={
  client
}