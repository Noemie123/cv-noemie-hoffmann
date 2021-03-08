// buttons
let firstBtn = $('#headingOne')[0].lastElementChild;
let secondBtn = $('#headingTwo')[0].lastElementChild;
let thirdBtn = $('#headingThree')[0].lastElementChild;
let fourthBtn = $('#headingFour')[0].lastElementChild;
let fifthBtn = $('#headingFive')[0].lastElementChild;


// first btn - cda
$(firstBtn).on("click", () => {
    $('#cardOne').removeClass("cardHeight");

    if ($('#cardOne')[0].lastElementChild.className == "collapse") {

        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");
    
        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");
    
        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    }
})


// second btn - dev
$(secondBtn).on("click", () => {
    $('#cardTwo').removeClass("cardHeight");

    if ($('#cardTwo')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");
    
        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");
    
        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    }
})


// third btn - prequalif
$(thirdBtn).on("click", () => {
    $('#cardThree').removeClass("cardHeight");

    if ($('#cardThree')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");
    
        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    }
})


// fourth btn - master 1
$(fourthBtn).on("click", () => {
    $('#cardFour').removeClass("cardHeight");

    if ($('#cardFour')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");
    
        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    }
})


// fourth btn - licence
$(fifthBtn).on("click", () => {
    $('#cardFive').removeClass("cardHeight");

    if ($('#cardFive')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");
    
        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");

    }
})