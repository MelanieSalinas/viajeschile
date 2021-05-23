$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('#cambiarectangulo').dblclick(function(){
        $(this).css('background-color', 'red');
        });

        $('#cambiarectangulo2').dblclick(function(){
            $(this).css('background-color', 'yellow');
            });

            $('#cambiarectangulo3').dblclick(function(){
                $(this).css('background-color', 'blue');
                });
    });
    
	$(".titulocard1").click(function () {
        $('.cuerpocard1').toggle(['slow'] ,['show']);
    });
    $(".titulocard2").click(function () {
        $('.cuerpocard2').toggle(['slow'] ,['show']);

    });
    $(".titulocard3").click(function () {
        $('.cuerpocard3').toggle(['slow'] ,['show']);
    });
    $(".titulocard4").click(function () {
        $('.cuerpocard4').toggle(['slow'] ,['show']);

    });

