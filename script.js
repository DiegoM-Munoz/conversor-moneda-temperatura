// const monedaConvertir = ""
// const cantidadConvertir = parseFloat(prompt("Qué cantidad de dolares deseas convertir? "));
// let pesosColombianos = cantidadConvertir * 3898.63;

// pesosColombianos = pesosColombianos.toFixed(2);
// alert('$ ' + `${cantidadConvertir} USD equivalen a $ ${pesosColombianos} COP`);

const conversion = document.querySelector(".cajaDeConversion");

function convertirMoneda(){
    const crearTitulo = document.createElement("h3");
    crearTitulo.textContent = "Selecione la moneda para convertir a COP";
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

function cuadroCantidadConvertir() {
    const crearSubtitulo = document.createElement("h4");
    crearSubtitulo.textContent = "Ingrese la cantidad a convertir";
    const cuadroCantidad  = document.createElement("input");
    const crearConvertirBtn = document.createElement("button");
    crearConvertirBtn.setAttribute("id","btn-convertir");
    crearConvertirBtn.textContent="Convertir";
    // crearConvertirBtn.addEventListener("click", mostrarResultado());
    conversion.appendChild(crearSubtitulo);
    conversion.appendChild(cuadroCantidad);
    conversion.appendChild(crearConvertirBtn);
}