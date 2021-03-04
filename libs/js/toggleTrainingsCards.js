// first card 
let firstBtn = $('#headingOne')[0].lastElementChild;
$(firstBtn).on("click", () => {
    let firstExpanded = $(firstBtn).attr('aria-expanded');

    if (firstExpanded == "false") {
        $('#cardOne').removeClass("cardHeight")
    } else if (firstExpanded == "true") {
        $('#cardOne').addClass("cardHeight")
    }
})

// second card 
let SecondBtn = $('#headingTwo')[0].lastElementChild;
$(SecondBtn).on("click", () => {
    let secondExpanded = $(SecondBtn).attr('aria-expanded');

    if (secondExpanded == "false") {
        $('#cardTwo').removeClass("cardHeight")
    } else if (secondExpanded == "true") {
        $('#cardTwo').addClass("cardHeight")
    }
})

// third card 
let thirdBtn = $('#headingThree')[0].lastElementChild;
$(thirdBtn).on("click", () => {
    let thirdExpanded = $(thirdBtn).attr('aria-expanded');

    if (thirdExpanded == "false") {
        $('#cardThree').removeClass("cardHeight")
    } else if (thirdExpanded == "true") {
        $('#cardThree').addClass("cardHeight")
    }
})

// fourth card 
let fourthBtn = $('#headingFour')[0].lastElementChild;
$(fourthBtn).on("click", () => {
    let fourthExpanded = $(fourthBtn).attr('aria-expanded');

    if (fourthExpanded == "false") {
        $('#cardFour').removeClass("cardHeight")
    } else if (fourthExpanded == "true") {
        $('#cardFour').addClass("cardHeight")
    }
})

// fifth card 
let fifthBtn = $('#headingFive')[0].lastElementChild;
$(fifthBtn).on("click", () => {
    let fifthExpanded = $(fifthBtn).attr('aria-expanded');

    if (fifthExpanded == "false") {
        $('#cardFive').removeClass("cardHeight")
    } else if (fifthExpanded == "true") {
        $('#cardFive').addClass("cardHeight")
    }
})