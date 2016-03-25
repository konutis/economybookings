$(function(global, $){

    $(".js-dropdown").each(function() {
        var $dropdown = $(this),
            $dropdownToggler = $dropdown.find(".js-dropdown-toggler"),
            $dropdownBox = $dropdown.find(".js-dropdown-box"),
            $dropdownItem = $dropdown.find(".js-dropdown-item"),
            dropdownType = $dropdown.data("dropdown-type"),
            $dropdownChoice = $dropdown.find(".js-dropdown-choice");


        $dropdownToggler.bind("click", buttonHandler);

        function buttonHandler(el) {
            $dropdownBox.toggleClass("active");
            $(document).bind("click", toggleDropdown);
        }

        function toggleDropdown(e) {
            var $target = $(e.target),
                inBox = $(e.target).closest($dropdown[0]).length,
                inButton = $(e.target).closest($dropdownToggler[0]).length,
                inItem = $(e.target).closest($dropdownItem).length,
                closestItem = $(e.target).closest($dropdownItem);


            if (!inButton) {
                if ( dropdownType !== "closing" ) {
                    if (!inBox) {
                        $dropdownBox.removeClass("active");
                        $(document).unbind("click", toggleDropdown);
                    }
                } else {
                    if (inItem) {
                        var itemData = closestItem.data("item-data");
                        $dropdownChoice.text(itemData);
                    }
                    $dropdownBox.removeClass("active");
                    $(document).unbind("click", toggleDropdown);
                }
            }
        }
    });


}(window, jQuery));
