//Esconder
$("Document").ready(function(){
    $("#carrete").hide()
});

$(Document).on("click", function(){
   $("#carrete").show();
   $("h1").hide();
});

//Cambiar tamaño
$("#img1").on("mouseover", function(){
    $("#img1").css("width","300");
});

$("#img1").on("mouseout", function(){
    $("#img1").css("width","250");
});


$("#img2").on("mouseover", function(){
    $("#img2").css("width","300");
});

$("#img2").on("mouseout", function(){
    $("#img2").css("width","250");
});


$("#img3").on("mouseover", function(){
    $("#img3").css("width","300");
});

$("#img3").on("mouseout", function(){
    $("#img3").css("width","250");
});


$("#img4").on("mouseover", function(){
    $("#img4").css("width","300");
});

$("#img4").on("mouseout", function(){
    $("#img4").css("width","250");
});