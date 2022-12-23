function plazo() {
  let cuotas = parseInt(
    prompt(
      "Ingresa el plazo del prestamo, recuerde que debe estar comprendido entre 2 y 30 dias."
    )
  );
}

function saludar() {
  alert("Bienvenido " + this.nombre);
}

const usuario = {
  nombre: prompt("Ingresa tu nombre"),
  saludar,
};

usuario.saludar();

const criptosDisponibles = ["Bitcoin", "Ethereum", "Solana"];

alert("Las criptomonedas disponibles para credito son:");
criptosDisponibles.forEach((criptomoneda) => {
  alert(criptomoneda);
});

for (let i = 1; i < 3; i++) {
  let criptoSeleccionada = prompt("Ingrese la criptomoneda deseada");
  if (
    criptoSeleccionada == "Bitcoin" ||
    criptoSeleccionada == "bitcoin" ||
    criptoSeleccionada == "BTC" ||
    criptoSeleccionada == "btc" ||
    criptoSeleccionada == "Btc" ||
    criptoSeleccionada == "Ethereum" ||
    criptoSeleccionada == "ethereum" ||
    criptoSeleccionada == "ETH" ||
    criptoSeleccionada == "eth" ||
    criptoSeleccionada == "Eth" ||
    criptoSeleccionada == "SOL" ||
    criptoSeleccionada == "sol" ||
    criptoSeleccionada == "Sol" ||
    criptoSeleccionada == "Solana" ||
    criptoSeleccionada == "solana"
  ) {
    alert("La criptomoneda que usted selecciono es " + criptoSeleccionada);
    let monto = parseInt(prompt("Ingrese el monto a solicitar"));
    plazo();
    let montoFinal = monto + monto * 0.3;
    alert(
      "Usted debera pagar la totalidad de " +
        Math.ceil(montoFinal) +
        " " +
        criptoSeleccionada +
        "."
    );
    break;
  } else {
    alert("La criptomoneda seleccionada no esta disponible");
  }
}

do {
  obtener = prompt("Si desea obtener el prestamo escriba SI");
  if (obtener === "SI" || obtener === "si") {
    alert(
      "Felicidades, su prestamo sera despositado en su billetera virtual a la brevedad."
    );
    break;
  } else {
    alert("CRIPTOR agradece la simulacion de su prestamo.");
  }
} while (obtener === "SI" || obtener === "si");
