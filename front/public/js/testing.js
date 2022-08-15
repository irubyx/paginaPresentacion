const myForm = document.getElementById("formulario")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch("localhost:3001/testing").then((response)=>{
        console.log(response)
    })
})