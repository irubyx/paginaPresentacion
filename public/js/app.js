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

    const firstClass = fFirstClass.value
    const economy = fEconomy.value
    const children = fChildren.value
    const hours = fHours.value

    msgOne.textContent = "Calculating..."
    msgTwo.textContent = ""

    // Execute script
    // fetch(`/script?firstClass=${firstClass}&economy=${economy}&children=${children}&hours=${hours}`).then((response)=>{
    //     response.json().then((data) => {
    //         if (data.error) {
    //             msgOne.textContent = data.error
    //         } else {
    //             const answer = data.result.split("XXX")[1].trim().replace("\n","")
    //             msgOne.textContent = "Here we have the results:"
    //             msgTwo.textContent = answer
    //         }
    //     })
    // })
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