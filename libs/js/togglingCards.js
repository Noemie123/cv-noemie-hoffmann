// buttons
let firstBtn = $('#headingOne')[0].lastElementChild;
let secondBtn = $('#headingTwo')[0].lastElementChild;
let thirdBtn = $('#headingThree')[0].lastElementChild;
let fourthBtn = $('#headingFour')[0].lastElementChild;
let fifthBtn = $('#headingFive')[0].lastElementChild;


// first btn - cda
$(firstBtn).on("click", () => {
    $('#cardOne').removeClass("cardHeight");
    firstBtn.innerHTML = "voir -";

    if ($('#cardOne')[0].lastElementChild.className == "collapse") {

        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");

        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");

        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");

        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    } else {
        firstBtn.innerHTML = "voir +";
    }
})


// second btn - dev
$(secondBtn).on("click", () => {
    $('#cardTwo').removeClass("cardHeight");
    secondBtn.innerHTML = "voir -";

    if ($('#cardTwo')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");

        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");

        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");

        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    } else {
        secondBtn.innerHTML = "voir +";
    }
})


// third btn - prequalif
$(thirdBtn).on("click", () => {
    $('#cardThree').removeClass("cardHeight");
    thirdBtn.innerHTML = "voir -";

    if ($('#cardThree')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");
    
        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    } else {
        thirdBtn.innerHTML = "voir +";
    }
})


// fourth btn - master 1
$(fourthBtn).on("click", () => {
    $('#cardFour').removeClass("cardHeight");
    fourthBtn.innerHTML = "voir -";

    if ($('#cardFour')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");
    
        $('#cardFive').addClass("cardHeight");
        $(($('#cardFive')[0].lastElementChild)).removeClass("show");

    } else {
        fourthBtn.innerHTML = "voir +";
    }
})


// fourth btn - licence
$(fifthBtn).on("click", () => {
    $('#cardFive').removeClass("cardHeight");
    fifthBtn.innerHTML = "voir -";

    if ($('#cardFive')[0].lastElementChild.className == "collapse") {

        $('#cardOne').addClass("cardHeight");
        $(($('#cardOne')[0].lastElementChild)).removeClass("show");
    
        $('#cardTwo').addClass("cardHeight");
        $(($('#cardTwo')[0].lastElementChild)).removeClass("show");
    
        $('#cardThree').addClass("cardHeight");
        $(($('#cardThree')[0].lastElementChild)).removeClass("show");
    
        $('#cardFour').addClass("cardHeight");
        $(($('#cardFour')[0].lastElementChild)).removeClass("show");

    } else {
        fifthBtn.innerHTML = "voir +";
    }
})