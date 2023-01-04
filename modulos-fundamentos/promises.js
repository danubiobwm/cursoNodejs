async function executar() {
  const msg2 = await aguardarSetTimeOut();
  console.log("1 MSG");
  console.log(msg2);

  console.log("3 MSG");
}

function aguardarSetTimeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("2 MSG");
      resolve("2 MSG");
    }, 1000);
  });
}

executar();