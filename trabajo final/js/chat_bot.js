function mostrar(id) {

    let pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function (pantalla) {
        pantalla.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function enviarPedido() {

    let pedido = document.getElementById("pedidoNumero").value;

    if (pedido === "") {
        alert("Por favor ingrese un número de pedido.");
    } else {
        alert("Pedido registrado correctamente.\nNúmero de pedido: " + pedido);
    }
}

function enviarReporte() {

    let error = document.getElementById("errorWeb").value;

    if (error === "") {
        alert("Por favor describa el error encontrado.");
    } else {
        alert("Reporte enviado correctamente.");
    }
}

function calificar(valor) {

    let mensaje = "";

    switch (valor) {

        case 1:
            alert("Lamentamos que tu experiencia no haya sido buena.");
            break;

        case 2:
            alert("Gracias por tu opinión. Seguiremos mejorando.");
            break;

        case 3:
            alert("Gracias por calificarnos.");
            break;

        case 4:
            alert("Nos alegra que hayas tenido una buena experiencia.");
            break;

        case 5:
            alert("¡Muchas gracias! Nos encanta saber que estás satisfecho.");
            break;

        default:
            alert("Gracias por participar.");
    }
}