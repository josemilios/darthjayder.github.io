$(document).ready(function() {

    $("input.slider").on("input change", function(event) {
        var element = $(this).parents("div.container");
        var pos = event.target.value;

        $("div.before").css({width: pos + "%"});
        $("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
        element.find("div.before").css({width: pos + "%"});
        element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });

});
