const myForm = document.getElementById("formulario")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch("http://localhost:3001/testing").then((response)=>{
        response.json().then((data) => {
            console.log(data)
        })
    })
})