// const aluno = {
//   nome: "Fernando",
//   idade: 20,
//   cursos: ["nodejs", "SQL", "Docker"],
//   email: "j@gmail.com",
//   endereco: "rua z",
//   telefone: "4663-3322",
// };

// console.log({ aluno });

// const alunoAtualizado = {
//   nome: aluno.nome,
//   idade: 22,
//   cursos: aluno.cursos,
//   email: aluno.email,
//   endereco: aluno.endereco,
//   telefone: aluno.telefone,
// };


//spread

// const alunoAtualizado ={
//   ...aluno, idade: 30, cursos:[...aluno.cursos, "Java"]
// }

// console.log({ alunoAtualizado });


//Rest

// const {nome, idade, ...rest} = aluno;
// console.log(nome)

const nomes = ["Danubio", "Rebeca", "Israel", "Davi"]

const [primeiro, ...restArray] = nomes;

console.log(restArray)