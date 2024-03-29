let elementsCreated = false; // señal para no crear más cuadros de dialogo
const conversion = document.querySelector(".cajaDeConversion");
//Varibales de referencia de cambio
let medidaDeCambio = "0";
let valorUsd = 4000
let valorEur = 4500
let valorMxn = 250

//Función para crear el boton convertir moneda
function convertirMoneda(){
    if (!elementsCreated) { // Check if elements haven't been created yet
        const crearTitulo = document.createElement("h3");
        crearTitulo.textContent = "Selecione la moneda para convertir a COP";
        //Crear lista desplegable de monedas
        const opcionesDeMonedas = ["COP", "USD", "EUR", "MXN"];
        const crearListaDeMonedas = document.createElement("select");
        crearListaDeMonedas.setAttribute("id","lista");
        for (let i = 0; i < opcionesDeMonedas.length; i++) {
            const listItem = document.createElement("option");
            listItem.textContent = opcionesDeMonedas[i];
            crearListaDeMonedas.appendChild(listItem);
        }
        conversion.appendChild(crearTitulo);
        conversion.appendChild(crearListaDeMonedas);
    }
    // Asignar valor a medidaDeCambio para saber qué calucular
    medidaDeCambio = "moneda"
    return medidaDeCambio
}

//Función para crear el boton convertir moneda
function convertirTemperatura(){
    if (!elementsCreated) { // Check if elements haven't been created yet
        const crearTitulo = document.createElement("h3");
        crearTitulo.textContent = "Selecione la temperatura para convertir";
        //Crear lista desplegable de temperatura
        const opcionesDeTemperatura = ["fahrenheit", "centígrados"];
        const crearListaDeTemperaturas = document.createElement("select");
        crearListaDeTemperaturas.setAttribute("id","lista");
        for (let i = 0; i < opcionesDeTemperatura.length; i++) {
            const listItem = document.createElement("option");
            listItem.textContent = opcionesDeTemperatura[i];
            crearListaDeTemperaturas.appendChild(listItem);
        }
        conversion.appendChild(crearTitulo);
        conversion.appendChild(crearListaDeTemperaturas);
    }
    // Asignar valor a medidaDeCambio para saber qué calucular
    medidaDeCambio = "temperatura"
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
    const medidaDeConversion = document.getElementById("lista").value;
    const valorConvertir = parseFloat(document.getElementById("valor-conversion").value);
    // Verificar si el input está vacío
    if (valorConvertir === "" || isNaN(valorConvertir)) {
    alert("Por favor ingresa un valor válido en el campo de cantidad.");
    return; // Termina la función si es un valor invalido
    }
    // BLOQUE CONVERSION DE MONEDA //
    if (medidaDeCambio == "moneda") {
        // // console.log(medidaDeConversion)
        // // console.log(typeof(medidaDeConversion))
        if (medidaDeConversion == "COP") {
            alert ("Selecciona una moneda diferente a COP");
            valorConvertido = valorConvertir * 1;
        } else if (medidaDeConversion == "USD") {
            valorConvertido = valorConvertir * valorUsd;
        } else if (medidaDeConversion == "EUR") {
            valorConvertido = valorConvertir * valorEur;
        } else if (medidaDeConversion == "MXN") {
            valorConvertido = valorConvertir * valorMxn;
        } else {}
        let total = valorConvertido;
        const mensajeTotal = document.createElement("h1");
        mensajeTotal.setAttribute("id","mensaje-total")
        mensajeTotal.textContent = `$${valorConvertir} ${medidaDeConversion} equivalen a $${total} COP`;
        conversion.appendChild(mensajeTotal);
        //BLOQUE CONVERSION TEMPERATURA //
    }  else if (medidaDeCambio == "temperatura") {
            if (medidaDeConversion == "fahrenheit") {
            valorConvertido = ((valorConvertir - 32) / 1.8).toFixed(2) + '°C';
            } else if (medidaDeConversion == "centígrados") {
            valorConvertido = ((valorConvertir * 9/5) +  32) + '°F';
            } else {}
            total = valorConvertido;
            const mensajeTotal = document.createElement("h1");
            mensajeTotal.setAttribute("id", "mensaje-total");
            mensajeTotal.textContent = `${valorConvertir}° ${medidaDeConversion} es igual a ${valorConvertido}`;
            conversion.appendChild(mensajeTotal);
        }
}