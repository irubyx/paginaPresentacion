// Obtengo el formulario
const form = document.querySelector("#formulario")
const fFlightTag = document.querySelector("#flightTag")

// Obtengo los <p> que van a tener las respuestas
const msgOne = document.querySelector("#message-1")
const msgTwo = document.querySelector("#message-2")

msgOne.textContent = ""
msgTwo.textContent = ""

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const flightTag = fFlightTag.value

    msgOne.textContent = "Checking status..."
    msgTwo.textContent = ""

    fetch(`/status?code=${flightTag}`).then((response)=>{
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error
            } else {
                const answer = data.results.split("XXX")[1].replaceAll("\n","").trim()
                msgOne.textContent = "The status of your flight is:"
                msgTwo.textContent = answer
            }
        })
    })
})