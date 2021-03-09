/* get list of logos */
let listLogos = $(".itLogos");

/* going through each id and set mouseover on them */
$.each(listLogos, function (key, value) {

    if (value.id != "") {
        let id = "#" + value.id;
        let dest = "#logoText" + key;

        $(id).mouseover(() => {
            $(dest).text(this.alt);
            $(dest).addClass("d-block");
        });

        $(id).mouseleave(() => {
            $(dest).text("");
            $(dest).removeClass("d-block")
        })
    }
});