const nomes = ["Jose", "Maria", "João", "Elisa", "Felipe", "Alexa"]

const result = nomes.map((nome)=>{
  return {
    nome: nome,
    descricao: "o nome do user é: " + nome,
    id: Math.random().toFixed(2)
  }
})

console.log(result)
console.log("========================")


nomes.forEach(nome => console.log(nome))