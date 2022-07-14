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

    fetch(`/script?firstClass=${firstClass}&economy=${economy}&children=${children}&hours=${hours}`).then((response)=>{
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error
            } else {
                const answer = data.results.split("XXX")[1].trim()
                msgOne.textContent = "Here we have the results:"
                msgTwo.textContent = answer
            }
        })
    })
})