$(function(global, $){

    "use strict";

    var html = "";
    var defaultOptions = {
        monthsToView: 1
    };
    var cal_days_labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    var cal_months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var cal_current_date = new Date();


    var Calendar = function(options, month, year) {

        return new Calendar.init(options, month, year);

    };



    Calendar.prototype = {
        generateButtons: function () {

            var btnHtml = "";
            btnHtml += '<button type="button" data-dir="prev" class="js-calendar-nav calendar-nav prev">&#xf104;</button>';
            btnHtml += '<button type="button" data-dir="next" class="js-calendar-nav calendar-nav next">&#xf105;</button>';

            //this should be changed to closest
            $(".calendar-navigations").html(btnHtml);

            if ( this.options.goneMonths === false ) {
                $(".calendar-nav.prev").hide();
            }
        },
        generateHTML: function(month, year) {

            // get first day of month
            var firstDay = new Date(year, month, 1);
            var startingDay = firstDay.getDay();

            // find number of days in month
            var monthLength = cal_days_in_month[month];

            // compensate for leap year
            if (month == 1) { // February only!
                if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
                    monthLength = 29;
                }
            }

            // do the header
            var monthName = cal_months_labels[month];


            html += '<div class="calendar-month" data-year="' + year + '" data-month="' + month + '">';
            html += '<table class="calendar-table">';
            html += '<tr><th colspan="7">';
            html += '<span class="month-name">' + monthName + '</span> <span class="calendar-year">' + year + '</span>';
            html += '</th></tr>';
            html += '<tr class="calendar-header">';
            for(var i = 0; i <= 6; i++ ){
                html += '<td class="calendar-header-day">';
                html += cal_days_labels[i];
                html += '</td>';
            }
            html += '</tr><tr>';

            // fill in the days
            var day = 1;
            // this loop is for is weeks (rows)
            for (var i = 0; i < 9; i++) {
                // this loop is for weekdays (cells)
                for (var j = 1; j <= 7; j++) {
                    html += '<td';

                    if (day <= monthLength && (i > 0 || j >= startingDay)) {
                        var realMonth = month + 1;
                        html += ' class="calendar-day" data-date="' + year + '-' + realMonth + '-' + day + '"';
                    }

                    html += '>';
                    if (day <= monthLength && (i > 0 || j >= startingDay)) {
                        html += day;
                        day++;
                    }
                    html += '</td>';

                }
                // stop making rows if we've run out of days
                if (day > monthLength) {
                    break;
                } else {
                    html += '</tr><tr>';
                }
            }
            html += '</tr></table></div>';
        },
        switchMonth: function(direction, selector) {

            html = "";

            var lastMonth = new Date();
            var firstMonth = new Date();

            lastMonth.setMonth(this.month + this.options.monthsToView + this.counter);
            firstMonth.setMonth(this.month + this.counter - 1);

            if (direction === "next") {

                this.generateHTML(lastMonth.getMonth(), lastMonth.getFullYear());
                selector.children(":first").remove();
                $(selector).append(html);
                this.counter += 1;

            } else {

                this.generateHTML(firstMonth.getMonth(), firstMonth.getFullYear());
                selector.children(":last").remove();
                $(selector).prepend(html);
                this.counter -= 1;

            }
            if ( this.options.goneMonths === false ) {
                if ( this.counter < 1 ) {
                    $(".calendar-nav.prev").hide();
                } else {
                    $(".calendar-nav.prev").show();
                }
            }
            if ( this.options.type === "rangePicker" ) {
                this.createRange(selector);
            }
        },
        createRange: function(selector) {
            var days = selector.find(".calendar-day");



            function pickupDate() {

                var selectedDate = new Date($(this).data("date"));

                $(this).addClass("pickup-date");
                $(".js-calendar").removeClass("pickup-cal").addClass("return-cal");

                days.unbind("click", pickupDate);

                days.bind("mouseenter", function() {

                    var hoverDate = new Date($(this).data("date"));


                    if ( selectedDate.getTime() < hoverDate.getTime() ) {

                        // creating range
                        days.each(function() {
                            var dayDate = new Date($(this).data("date"));

                            if ( selectedDate.getTime() < dayDate.getTime() &&  dayDate.getTime() <= hoverDate.getTime()){
                                $(this).addClass("in-range");

                            } else {
                                $(this).removeClass("in-range");
                            }
                        });

                    } else {
                        days.each(function() {
                            $(this).removeClass("in-range");
                        });
                    }

                });

                days.bind("click", returnDate)

            }

            function returnDate(){

                days.unbind("mouseenter");

                $(this).addClass("return-date");
                days.unbind("click");

                setTimeout(function() {
                    $(".js-calendar").removeClass("active");
                }, 1000)
            }


            days.bind("click", pickupDate);


        },
        setCalendar: function(selector) {
            var self = this;
            this.generateButtons(selector);

            for ( var k = this.month; k < this.month + this.options.monthsToView; k++) {
                this.generateHTML(k, this.year);
            }
            $(selector).html(html);

            if ( this.options.type === "rangePicker" ) {
                self.createRange(selector);
            }

            var navigation = $(".js-calendar-nav");

            navigation.on("click", function() {
                self.switchMonth($(this).data("dir"), selector);
            });

            return this;
        }

    };

    Calendar.init = function(options, month, year) {

        var self = this;
        self.options = options || defaultOptions;
        self.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
        self.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
        self.counter = 0;

    };




    Calendar.init.prototype = Calendar.prototype;

    global.Calendar = Calendar;

}(window, jQuery));