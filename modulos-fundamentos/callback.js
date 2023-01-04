// Buscar os dados
// chamar uma função pra validar

function buscarUsuario(callback) {
  const usuario = {
    id: 1,
    name: "Julia",
    idade: 18,
  };
  callback(usuario);
}

function calcularIdade(usuario) {
  console.log({ usuario });
  if(usuario.idade>=18){
    console.log('Maior de idade')
  }else{
    console.log('Menor de idade')
  }
}

buscarUsuario(calcularIdade)
