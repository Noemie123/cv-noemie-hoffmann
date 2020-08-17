$(document).ready(() => {
    $('#loadIntoDiv').load('templates/mainTemplate.html #divInfosPerso');

    $('#btnProjetsTechnos').click(() => {
        $('#toggleMenuBtn').attr('aria-expanded', 'false');
        $('#navbarContent').removeClass('show');
        $('#loadIntoDiv').load('templates/mainTemplate.html #divProjetsTechnos');
        $(document).scrollTop(0);

    })

    $('#btnDiploForma').click(() => {
        $('#toggleMenuBtn').attr('aria-expanded', 'false');
        $('#navbarContent').removeClass('show');
        $('#loadIntoDiv').load('templates/mainTemplate.html #divDiploForma');
        $(document).scrollTop(0);
    })

    $('#btnExpComp').click(() => {
        $('#toggleMenuBtn').attr('aria-expanded', 'false');
        $('#navbarContent').removeClass('show');
        $('#loadIntoDiv').load('templates/mainTemplate.html #divExpComp');
        $(document).scrollTop(0);
    })

    $('#btnInfosPerso').click(() => {
        $('#toggleMenuBtn').attr('aria-expanded', 'false');
        $('#navbarContent').removeClass('show');
        $('#loadIntoDiv').load('templates/mainTemplate.html #divInfosPerso');
        $(document).scrollTop(0);
    })
})