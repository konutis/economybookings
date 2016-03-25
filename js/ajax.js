//var req = new XMLHttpRequest();
//req.open('GET', 'https://restcountries.eu/rest/v1/name/ba', true); /* Третий аргумент true означает асинхронность */
//req.onreadystatechange = function (aEvt) {
//    if (req.readyState == 4) {
//        if(req.status == 200){
//            var data = JSON.parse(req.responseText);
//            for (var i = 0; i<data.length; i++) {
//                console.log(data[i]);
//            }
//        } else {
//            dump("Error loading page\n");
//        }
//    }
//};
//req.send(null);

//
//$.getJSON( "ajax/cars.json", function( data ) {
//    var cars = [];
//
//    $.each( data, function( index ) {
//        cars.push( '<li class="hot-deal carousel-item js-carousel-item"> \
//                        <div class="hot-deal__header"> \
//                            <span class="hot-deal__mark">' + data[index].brand + '</span> \
//                        </div> \
//                        <div class="hot-deal__img"> \
//                            <img src="' + data[index].imgSrc + '" alt="' + data[index].brand + '" /> \
//                        </div> \
//                        <div class="hot-deal__price"> \
//                            <span class="hot-deal__price-now">' + data[index].newPrice + '</span> \
//                            <span class="hot-deal__price-before">' + data[index].oldPrice + '</span> \
//                        </div> \
//                        <button class="hot-deal__book-now"> \
//                            <span>Book now</span> \
//                        </button> \
//                        <div class="hot-deal__location"> \
//                            <span>' + data[index].location + '</span> \
//                        </div> \
//                    </li>');
//    });
//
//    $( "<ul/>", {
//        "class": "hot-deals-list carousel-list js-carousel-list",
//        html: cars.join( "" )
//    }).appendTo( ".hot-deal-container" );
//
//
//}).done(function() {
//
//    Carousel();
//});

$(function() {
    var cars = [];

    $.ajax({
        type: "GET",
        url: "ajax/cars.json",
        beforeSend: function( xhr ) {
            $("#spinner").show();
            $(".js-carousel").show();
        },
        success: function(data) {

            $.each( data, function( index ) {
                cars.push( '<li class="hot-deal carousel-item js-carousel-item"> \
                        <div class="hot-deal__header"> \
                            <span class="hot-deal__mark">' + data[index].brand + '</span> \
                        </div> \
                        <div class="hot-deal__img"> \
                            <img src="' + data[index].imgSrc + '" alt="' + data[index].brand + '" /> \
                        </div> \
                        <div class="hot-deal__price"> \
                            <span class="hot-deal__price-now">' + data[index].newPrice + '</span> \
                            <span class="hot-deal__price-before">' + data[index].oldPrice + '</span> \
                        </div> \
                        <button class="hot-deal__book-now"> \
                            <span>Book now</span> \
                        </button> \
                        <div class="hot-deal__location"> \
                            <span>' + data[index].location + '</span> \
                        </div> \
                    </li>');
            });

            $( "<ul/>", {
                "class": "hot-deals-list carousel-list js-carousel-list",
                html: cars.join( "" )
            }).appendTo( ".hot-deal-container" );

        }
    }).done(function() {
        $("#spinner").hide();
        Carousel();
    })

});

