//o que é objeto => atributos e características exemplo caneta: cor, marca, tamanho etc.
// new Objeto()

var caneta = new Object();

caneta.cor = "vermelha";
caneta.marca = "Big";
caneta.tamanho = "10cm";

var canetaPreta = new Object();

canetaPreta.cor = "preta";
canetaPreta.marca = "Big";
canetaPreta.tamanho = "18cm";

console.log(caneta);
console.log(canetaPreta);

// Função

function Caneta(cor, marca, dimensao) {
  this.cor = cor;
  this.marca = marca;
  this.dimensao = dimensao;
}
var novaCaneta= new Caneta();
novaCaneta.cor="Roxa"
novaCaneta.marca="BiG"
novaCaneta.dimensao="20cm"
console.log('novaCaneta', novaCaneta)


// criar objeto direto
var novaCanetaRosa = {
   cor : "Rosa",
   marca : "Big",
   tamanho : "18cm",
};
console.log('novaCanetaRosa', novaCanetaRosa)

// Object Direto

var PrototipoCaneta = {
  cor : "Marron",
  marca : "Big",
  tamanho : "10cm",
  imprimir(){
    console.log(this.cor, this.marca, this.tamanho)
  }
}
console.log('PrototipoCaneta', PrototipoCaneta)

var novaPrototipoCaneta = Object.create(PrototipoCaneta)
novaPrototipoCaneta.cor="verde"
novaPrototipoCaneta.imprimir()

//console.log('novaPrototipoCaneta', novaPrototipoCaneta)