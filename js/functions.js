$(function(){
  $('.booking').click(function(event){
    $('.mybooking').toggle();
  });
});

$(function(){
    $(document).mouseup(function (e)
  {
      var container = $(".mybooking");

      if (!container.is(e.target) && !$(e.target).closest(".booking").is(".booking")
          && container.has(e.target).length === 0)
      {
          container.hide();
      }
  });
});

$(function(){
  $('.currency').click(function(event){
    $('.other-valuta').toggle();
  });
});

$(function(){
    $(document).mouseup(function (e)
  {
      var container = $(".other-valuta");

      if (!container.is(e.target) && !$(e.target).closest(".currency").is(".currency")
          && container.has(e.target).length === 0)
      {
          container.hide();
      }
  });
});


$(function(){
  $('.language').click(function(event){
    $('.other-languages').toggle();
  });
});

$(function(){
    $(document).mouseup(function (e)
  {
      var container = $(".other-languages");

      if (!container.is(e.target) && !$(e.target).closest(".language").is(".language")
          && container.has(e.target).length === 0)
      {
          container.hide();
      }
  });
});


$(function(){
  $('.phone').click(function(event){
    $('.other-phones').toggle();
  });
});

$(function(){
    $(document).mouseup(function (e)
  {
      var container = $(".other-phones");

      if (!container.is(e.target) && !$(e.target).closest(".phone").is(".phone")
          && container.has(e.target).length === 0)
      {
          container.hide();
      }
  });
});



$(function(){
  $('.pickup').click(function(event){
    $('.calendar').toggle();
  });
});



$(function(){
    $(document).mouseup(function (e)
  {
      var container = $(".calendar");

      if (!container.is(e.target)
          && container.has(e.target).length === 0)
      {
          container.hide();
      }
  });
});

$(function(){
  $('.return').click(function(event){
    $('.calendar').toggle();

/* kā samainit CSS */

     $(".return").click(function(){
         $(".calendar__triangle").css("left", "705px");
     });

     $(".pickup").click(function(){
         $(".calendar__triangle").css("left", "635px");
     });
   });
});

$( document ).ready(function() {

    $('.perfect-scrollbar').perfectScrollbar();
});


/*

$(document).ready(function() {
	$(".user-review").dotdotdot({
		after: "a.readmore"
	});
});

*/
