$(function(global, $){

    $('.perfect-scrollbar').perfectScrollbar();




    var bookingCalendar = Calendar({ monthsToView: 3, goneMonths: false, type: "rangePicker" });
    bookingCalendar.setCalendar($(".calendar-wrapper"));


    var bookingValidation = Validator();
    bookingValidation.setValidator($(".mybooking__login"));

    var stayTunedValidation = Validator();
    stayTunedValidation.setValidator($(".subscribe-form"));

    var subscribeValidation = Validator();
    subscribeValidation.setValidator($(".subscribe-box__form"));





    $(".js-calendar-container").each(function() {
        var $container = $(this),
            $pickupButton = $container.find(".js-pickup"),
            $returnButton = $container.find(".js-return"),
            $calendar = $container.find(".js-calendar");

        $pickupButton.on("click", function() {
            $calendar.toggleClass("active");

        });
        $returnButton.on("click", function() {
            $calendar.removeClass("pickup-cal").addClass("return-cal");
        });

    });








}(window, jQuery));


