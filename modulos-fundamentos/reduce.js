const carrinhoCompras = [
  { produto: "mouse", preco: 600.1 },
  { produto: "monitor", preco: 120.6 },
  { produto: "teclado", preco: 100.6 },
  { produto: "fone", preco: 200.5 },
  { produto: "base", preco: 50.5 },
];

const result = carrinhoCompras.reduce(
  (previous, currentValue) => previous + currentValue.preco,
  0
);

console.log(result);
