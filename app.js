// Calcular agua: 1 litro x persona

// Calcular plato principal clase economica: 300 g x persona

// Calcular postre clase economica:

// Calcular plato principal primera clase

// Calcular postre primera clase

function calcular() {
    const primeraClase = parseInt(document.getElementById("primeraClase").value)
    const economica = parseInt(document.getElementById("economica").value)
    const niños = parseInt(document.getElementById("niños").value)
    const horas = parseInt(document.getElementById("horas").value)

    const resultado = "El viaje requerirá de los siguientes alimentos:<br\>"+
    "Menu clase económica: "+"CANTIDAD_CLASE_ECONOMICA"+"<br\>Menu primera clase: "+"CANTIDAD_PRIMERA_CLASE"+"<br\>Menu para niños: "+"CANTIDAD_MENU_NIÑOS"+"<br\>"+
    "Agua:"+"CANTIDAD_AGUA"+"<br\>Postre primera clase: "+"CANTIDAD_POSTRE_PRIMERA"+"<br\>Postre clase económica: "+"CANTIDAD_POSTRE_ECO"

    document.getElementById("result").innerHTML = resultado;
}