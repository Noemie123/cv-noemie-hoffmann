$(document).ready(() => {
    $('#mainContainer').load('templates/mainTemplate.html #divInfosPerso');

    $('#btnProjetsTechnos').click(() => {
        $('#mainContainer').load('templates/mainTemplate.html #divProjetsTechnos');
        $(document).scrollTop(0);
    })

    $('#btnDiploForma').click(() => {
        $('#mainContainer').load('templates/mainTemplate.html #divDiploForma');
        $(document).scrollTop(0);
    })

    $('#btnExpComp').click(() => {
        $('#mainContainer').load('templates/mainTemplate.html #divExpComp');
        $(document).scrollTop(0);
    })

    $('#btnInfosPerso').click(() => {
        $('#mainContainer').load('templates/mainTemplate.html #divInfosPerso');
        $(document).scrollTop(0);
    })
})