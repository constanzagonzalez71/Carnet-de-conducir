document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Recoger los valores de los campos de entrada
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let pais = document.getElementById("pais").value;

    // Concatenar variables
    let carnet = `Nombre: ${nombre}<br>Dirección: ${direccion}<br>País: ${pais}`;

    // Mostrar el carnet en el div correspondiente
    document.getElementById("carnet").innerHTML = carnet;

    // Limpiar el formulario después de mostrar el carnet
    document.getElementById("formulario").reset();
});

