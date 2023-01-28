const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "activado");
  botonColorMode.innerText = "Light Mode";
}

function desactivarDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "desactivado");
  botonColorMode.innerText = "Dark Mode";
}

if (darkMode === "activado") {
  activarDarkMode();
} else {
  desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "activado") {
    desactivarDarkMode();
  } else {
    activarDarkMode();
  }
});

/** FORM */

const form = document.querySelector("#name-form");

// const comenzar = document.querySelector("#comenzar");

const enviarFormulario = (e) => {
  e.preventDefault();

  const { name, email, password } = e.target;

  console.log(name.value, email.value, password.value);

  Toastify({
    text: "Bienvenido " + name.value,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();

  setTimeout(irAPrestamo, 1300);
};

function irAPrestamo() {
  location.href = "./pages/main.html";
}
if (form !== undefined && form !== null) {
  form.addEventListener("submit", enviarFormulario);
}

/**FUNCION */
const criptoSeleccionada = [];
const botonBtc = document.querySelector("#btc");
const botonEth = document.querySelector("#eth");
const botonSol = document.querySelector("#sol");

botonBtc.addEventListener("click", function () {
  if (botonEth.classList.contains("active")) {
    botonEth.classList.remove("active");
    criptoSeleccionada.shift(" Bitcoin");
  }
  if (!botonBtc.classList.contains("active")) {
    botonBtc.classList.toggle("active");
    criptoSeleccionada.push(" Bitcoin");
  }
  Toastify({
    text: "Haz seleccionado Bitcoin",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});

botonEth.addEventListener("click", function () {
  if (botonBtc.classList.contains("active")) {
    botonBtc.classList.remove("active");
    criptoSeleccionada.shift(" Ethereum");
  }
  if (!botonEth.classList.contains("active")) {
    botonEth.classList.toggle("active");
    criptoSeleccionada.push(" Ethereum");
  }
  Toastify({
    text: "Haz seleccionado Ethereum",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});

const noDisponible = (e) => {
  e.preventDefault();
  Toastify({
    text: "No disponible momentaneamente",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #ff0000, #ff7575)",
    },
  }).showToast();
};

botonSol.addEventListener("click", noDisponible);

const monto = document.querySelector("#datos-prestamo");
const numero = document.querySelector("#numero");
const periodo = document.querySelector("#periodo");
const obtener = document.querySelector("#obtener-prestamo");
let recargo = 1.2;

function precioFinal() {
  Swal.fire({
    text: "Confirma tu prestamo",
    title:
      "Deberas de pagar " +
      numero.value * recargo +
      criptoSeleccionada +
      " en " +
      periodo.value +
      " dias.",
    icon: "info",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#008000",
    cancelButtonColor: "#d33",
    confirmButtonText: "Obtener",
    background: "#a435ef",
    color: "#ffffff",
  })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          confirmButtonColor: "#008000",
          background: "#a435ef",
          color: "#ffffff",
          title: "Felicidades!",
          text: "Tu prestamo sera depositado en tu billetera virtual a la brevedad.",
          icon: "success",
        });
      }
    })
    .finally(() => {
      document.getElementById("datos-prestamo").reset();
    });
}

obtener.addEventListener("click", precioFinal);

// Mostrar precios de criptos
const criptosDisponibles = document.querySelector("#criptos-disponibles");

fetch("/js/criptos.json")
  .then((response) => response.json())
  .then((data) => {
    mostrarProductos(data);
  });

function mostrarProductos(data) {
  data.forEach((cripto) => {
    const li = document.createElement("li");
    li.innerText = cripto.Nombre + " - $" + cripto.Precio;
    criptosDisponibles.append(li);
  });
}
