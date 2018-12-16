$(document).ready(function () {

  // $('#main').append("text will go here");

  $('#navbar li').on('click', function(){
    $('#navbar li').removeClass();
    $(this).addClass("active");
  });

  $('#navbar li a').on('click', function(){
    $('.contents').hide();
    var section = $(this).attr('href');
    $(section).css("display", "grid")
  })

});
