// buttons
let firstBtn = $('#headingOne')[0].lastElementChild;
let SecondBtn = $('#headingTwo')[0].lastElementChild;
let thirdBtn = $('#headingThree')[0].lastElementChild;
let fourthBtn = $('#headingFour')[0].lastElementChild;
let fifthBtn = $('#headingFive')[0].lastElementChild;

// TODO - REMOVE COLLAPSE SHOW

// checking if one is toggled 
let toggled = [null, null];
let elmt = null;
function checkIfToggled() {

    if ($(firstBtn).attr('aria-expanded')) {
        console.log("firstBtn has class");
        toggled = [firstBtn, $('#cardOne')];
    } else if ($(SecondBtn).hasClass("cardHeight")) {
        toggled = [SecondBtn,  $('#cardTwo')];
    } else if ($(thirdBtn).hasClass("cardHeight")) {
        toggled = [thirdBtn,  $('#cardThree')];
    } else if ($(fourthBtn).hasClass("cardHeight")) {
        toggled = [fourthBtn,  $('#cardFour')];
    } else if ($(fifthBtn).hasClass("cardHeight")) {
        toggled = [fifthBtn,  $('#cardFive')];
    } else  {
        toggled = [null, null];
    }

    console.log(toggled[0])
    return toggled;
}

// first card 
$(firstBtn).on("click", () => {
    elmt = checkIfToggled();

    console.log(elmt[0]);
    console.log(firstBtn);

    if (elmt[0] != firstBtn) {
        console.log("not equal 1");
        elmt[1].addClass("cardHeight");
    }

    let firstExpanded = $(firstBtn).attr('aria-expanded');

    if (firstExpanded == "false") {
        $('#cardOne').removeClass("cardHeight")
    } else if (firstExpanded == "true") {
        $('#cardOne').addClass("cardHeight")
    }
})

// second card 
$(SecondBtn).on("click", () => {
    elmt = checkIfToggled();

    if (elmt[0] != SecondBtn) {
        console.log("not equal 2");
        elmt[1].addClass("cardHeight");
    }

    let secondExpanded = $(SecondBtn).attr('aria-expanded');

    if (secondExpanded == "false") {
        $('#cardTwo').removeClass("cardHeight")
    } else if (secondExpanded == "true") {
        $('#cardTwo').addClass("cardHeight")
    }
})

// third card 
$(thirdBtn).on("click", () => {
    elmt = checkIfToggled();

    if (elmt[0] != thirdBtn) {
        console.log("not equal 3");
        elmt[1].addClass("cardHeight");
    }

    let thirdExpanded = $(thirdBtn).attr('aria-expanded');

    if (thirdExpanded == "false") {
        $('#cardThree').removeClass("cardHeight")
    } else if (thirdExpanded == "true") {
        $('#cardThree').addClass("cardHeight")
    }
})

// fourth card 
$(fourthBtn).on("click", () => {
    elmt = checkIfToggled();

    if (elmt[0] != fourthBtn) {
        console.log("not equal 4");
        elmt[1].addClass("cardHeight");
    }

    let fourthExpanded = $(fourthBtn).attr('aria-expanded');

    if (fourthExpanded == "false") {
        $('#cardFour').removeClass("cardHeight")
    } else if (fourthExpanded == "true") {
        $('#cardFour').addClass("cardHeight")
    }
})

// fifth card 
$(fifthBtn).on("click", () => {
    elmt = checkIfToggled();

    if (elmt[0] != fifthBtn) {
        console.log("not equal 5");
        elmt[1].addClass("cardHeight");
    }

    let fifthExpanded = $(fifthBtn).attr('aria-expanded');

    if (fifthExpanded == "false") {
        $('#cardFive').removeClass("cardHeight")
    } else if (fifthExpanded == "true") {
        $('#cardFive').addClass("cardHeight")
    }
})