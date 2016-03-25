$(function(global, $){
    "use strict";

    var Validator = function() {

        return new Validator.init();

    };

    Validator.prototype = {
        setValidator: function(selector) {
            var self = this;
            var emailInput = selector.find("input[name*='email']"),
                submitButton = selector.find("input[type*='submit']");

            emailInput.on("input", function() {

                self.validate($(this));

            });

            submitButton.on("click", function() {
                event.preventDefault();
            });

        },
        validate: function(_this) {
            var inputVal = _this.val();
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            var error = 0;
            if ( !(re.test(inputVal)) ) {
                _this.addClass("error");
                error++;
            } else {
                _this.removeClass("error");
            }
        }
    };

    Validator.init = function() {

        var self = this;

    };

    Validator.init.prototype = Validator.prototype;

    global.Validator = Validator;

}(window, jQuery));
