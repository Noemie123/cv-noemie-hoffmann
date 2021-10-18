$('#mailClick').mouseover(() => {
    $('#mailClickMessage').text("Cliquez sur mon adresse email pour la copier !");
    $('#mailClickMessage').removeClass('d-none');
    $('#mailClickSign').addClass('d-none');
})

$('#mailClick').mouseleave(() => {
    $('#mailClickMessage').addClass('d-none');
})

$('#mailClick').on('click', () => {

    // copying email
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#mailClick').text()).select();
    document.execCommand("copy");
    $temp.remove();


    $('#mailClickMessage').text("Email copié !");
    $('#mailClickSign').removeClass('d-none');
})