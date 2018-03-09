$("Document").ready(function() {
    $("#anuncio").text("Click para cambiar de color")
    .width(500)
    .height(500)
    .hide()
    .fadeIn(3000)
});

$("#anuncio").on("click", function(){
    let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];
    let color = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background", color);
});