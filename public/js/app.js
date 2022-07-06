// Obtengo el formulario
const fFlightForm = document.querySelector("#formulario")
const fFirstClass = document.querySelector("#firstClass")
const fEconomy = document.querySelector("#economy")
const fChildren = document.querySelector("#children")
const fHours = document.querySelector("#hours")

// Obtengo los <p> que van a tener las respuestas
const msgOne = document.querySelector("#message-1")
const msgTwo = document.querySelector("#message-2")

msgOne.textContent = ""
msgTwo.textContent = ""

fFlightForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // msgOne.textContent = "Loading..."
    // msgTwo.textContent = ""
    console.log("testing")
})

// Calcular agua: 1 litro x persona

// Calcular plato principal clase economica: 300 g x persona

// Calcular postre clase economica:

// Calcular plato principal primera clase

// Calcular postre primera clase

// function calcular() {
//     const primeraClase = parseInt(document.getElementById("primeraClase").value)
//     const economica = parseInt(document.getElementById("economica").value)
//     const niños = parseInt(document.getElementById("niños").value)
//     const horas = parseInt(document.getElementById("horas").value)

//     const resultado = "El viaje requerirá de los siguientes alimentos:<br\>" +
//         "Menu clase económica: " + "CANTIDAD_CLASE_ECONOMICA" + "<br\>Menu primera clase: " + "CANTIDAD_PRIMERA_CLASE" + "<br\>Menu para niños: " + "CANTIDAD_MENU_NIÑOS" + "<br\>" +
//         "Agua:" + "CANTIDAD_AGUA" + "<br\>Postre primera clase: " + "CANTIDAD_POSTRE_PRIMERA" + "<br\>Postre clase económica: " + "CANTIDAD_POSTRE_ECO"

//     document.getElementById("result").innerHTML = resultado;
// }