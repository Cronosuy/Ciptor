function plazo() {
  let cuotas = parseInt(
    prompt(
      "Ingresa el plazo del prestamo, recuerde que debe estar comprendido entre 2 y 24 meses"
    )
  );
}

for (let i = 1; i < 3; i++) {
  let criptoSeleccionada = prompt("Ingrese la criptomoneda deseada");
  if (
    criptoSeleccionada == "BTC" ||
    criptoSeleccionada == "btc" ||
    criptoSeleccionada == "Btc" ||
    criptoSeleccionada == "ETH" ||
    criptoSeleccionada == "eth" ||
    criptoSeleccionada == "Eth" ||
    criptoSeleccionada == "SOL" ||
    criptoSeleccionada == "sol" ||
    criptoSeleccionada == "Sol"
  ) {
    alert("La criptomoneda que usted selecciono es " + criptoSeleccionada);
    let monto = parseInt(prompt("Ingrese el monto a solicitar"));
    plazo();
    let montoFinal = monto + monto * 0.3;
    alert(
      "Usted debera pagar la totalidad de " +
        montoFinal +
        " " +
        criptoSeleccionada +
        "."
    );

    break;
  } else {
    alert("La criptomoneda seleccionada no esta disponible");
  }
}

// do {
//   obtener = prompt("Si desea obtener el prestamo escriba SI");
//   if ((obtener = "SI")) {
//     alert(
//       "Felicidades, su prestamo sera despositado en su billetera virtual a la brevedad."
//     );
//   } else {
//     alert("CRIPTOR agradece la simulacion de su prestamo.");
//   }
// } while ((obtener = SI));
