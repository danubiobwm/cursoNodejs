const user = [
  { id: 1, nome: "Jose", idade: 18 },
  { id: 2, nome: "Maria", idade: 18 },
  { id: 3, nome: "João", idade: 20 },
  { id: 4, nome: "Elisa", idade: 38 },
  { id: 5, nome: "Felipe", idade: 25 },
  { id: 6, nome: "Alexa", idade: 23 },
];
//console.log({ user });

const result = user.find((user) => user.idade == 25);
console.log(result);
