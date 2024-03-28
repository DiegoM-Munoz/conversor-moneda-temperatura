let elementsCreated = false; // señal para no crear más cuadros de dialogo
const conversion = document.querySelector(".cajaDeConversion");
//Varibales de referencia de cambio
let medidaDeCambio = "0";
let valorUsd = 4000
let valorEur = 4500
let valorMxn = 250

//Función para crear el cuadro del convertidor
function convertirMoneda(){
    if (!elementsCreated) { // Check if elements haven't been created yet
        const crearTitulo = document.createElement("h3");
        crearTitulo.textContent = "Selecione la moneda para convertir a COP";
        //Crear lista desplegable de monedas
        const opcionesDeMonedas = ["COP", "USD", "EUR", "MXN"];
        const crearListaDeMonedas = document.createElement("select");
        crearListaDeMonedas.setAttribute("id","lista-monedas");
        for (let i = 0; i < opcionesDeMonedas.length; i++) {
            const listItem = document.createElement("option");
            listItem.textContent = opcionesDeMonedas[i];
            crearListaDeMonedas.appendChild(listItem);
        }
        conversion.appendChild(crearTitulo);
        conversion.appendChild(crearListaDeMonedas);
    }
    // Mostrar elementos del cuadro convertidor
    // Asignar valor a medidaDeCambio para calcular
    medidaDeCambio = "moneda"
    return medidaDeCambio
}

//Función para crear input y boton de convertir
function cuadroCantidadConvertir() {
  if (!elementsCreated) { // Check if elements haven't been created yet
        const crearSubtitulo = document.createElement("h4");
        crearSubtitulo.textContent = "Ingrese la cantidad a convertir";

        const cuadroCantidad = document.createElement("input");
        cuadroCantidad.setAttribute("type", "number");
        cuadroCantidad.setAttribute("id", "valor-conversion");

        const crearConvertirBtn = document.createElement("button");
        crearConvertirBtn.setAttribute("id", "btn-convertir");
        crearConvertirBtn.textContent = "Convertir";
        crearConvertirBtn.setAttribute("onclick", "mostrarResultado()");

        conversion.appendChild(crearSubtitulo);
        conversion.appendChild(cuadroCantidad);
        conversion.appendChild(crearConvertirBtn);

        elementsCreated = true; // Activa la señal para que no se creen más cuadros!
    }
}

//Función con la logica para conversión
function mostrarResultado() {
    let valorConvertido = 0;
    if (medidaDeCambio == "moneda") {
        const monedaDeCambio = document.getElementById("lista-monedas").value;
        const valorConvertir = parseFloat(document.getElementById("valor-conversion").value);
        // // console.log(monedaDeCambio)
        // // console.log(typeof(monedaDeCambio))
        if (monedaDeCambio == "COP") {
            alert ("Selecciona una moneda diferente a COP");
            valorConvertido = valorConvertir * 1;
        } else if (monedaDeCambio == "USD") {
            valorConvertido = valorConvertir * valorUsd;
        } else if (monedaDeCambio == "EUR") {
            valorConvertido = valorConvertir * valorEur;
        } else if (monedaDeCambio == "MXN") {
            valorConvertido = valorConvertir * valorMxn;
        } else {}
        let total = valorConvertido;
        const mensajeTotal = document.createElement("h1");
        mensajeTotal.setAttribute("id","mensaje-total")
        mensajeTotal.textContent = `$${valorConvertir} ${monedaDeCambio} equivalen a $${total} COP`;
        conversion.appendChild(mensajeTotal);
    }
}