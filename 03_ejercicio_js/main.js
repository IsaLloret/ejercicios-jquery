//Destacar
$("#elem1").hover(function(){
    $("#elem1").addClass("destacar");
}, function() {
    $("#elem1").removeClass("destacar");
});

$("#elem2").hover(function(){
    $("#elem2").addClass("destacar");
}, function() {
    $("#elem2").removeClass("destacar");
});

$("#elem3").hover(function(){
    $("#elem3").addClass("destacar");
}, function() {
    $("#elem3").removeClass("destacar");
});

$("#elem4").hover(function(){
    $("#elem4").addClass("destacar");
}, function() {
    $("#elem4").removeClass("destacar");
});


//Cambiar foto
$("#elem1").hover(function(){
    $("img").attr("src", "img/arbol.jpg");
}, function() {
    $("img").attr("src", "img/blanco.jpg");
});

$("#elem2").hover(function(){
    $("img").attr("src", "img/lago.jpg");
}, function() {
    $("img").attr("src", "img/blanco.jpg");
});

$("#elem3").hover(function(){
    $("img").attr("src", "img/rio.jpg");
}, function() {
    $("img").attr("src", "img/blanco.jpg");
});

$("#elem4").hover(function(){
    $("img").attr("src", "img/sol.jpg");
}, function() {
    $("img").attr("src", "img/blanco.jpg");
});


