$(document).ready(function () { //Crear funcion tooltips//
    $('[data-toggle="tooltip"]').tooltip();
    $("#btnEnviar").click(function () {
        // Ocultar el formulario
        $("form").hide();
        // Mostrar la alerta de envío usando Bootstrap
        $(".alert").removeClass("d-none");
    });
});

$(document).ready(function () {
    $(".card-img-top").click(function () {
        $(this).siblings(".card-body").find(".card-text").toggle("slow"); /*Para minimizar texto de destacados*/
    });
});
