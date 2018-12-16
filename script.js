$(document).ready(function () {

  var small = window.matchMedia("(max-width: 600px)");

  $('#navbar li').on('click', function(){
    $('#navbar li').removeClass();
    $(this).addClass("active");
  });

  $('#navbar li a').on('click', function(){
    $('.contents').hide();
    var section = $(this).attr('href');
    $(section).css("display", "grid")
    if(small){
      $('#navbar').css('transform', 'translate: 0, -300px')
    }
  })

});
