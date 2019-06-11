$(document).ready(function () {

  // var small = window.matchMedia("(max-width: 600px)");
  // console.log(small)
  $('#navbar li').on('click', function(){
    $('#navbar li').removeClass();
    $(this).addClass("active");
  });

  $('#navbar li a').on('click', function(){
    console.log("click")
    $('.contents section').hide();
    var section = $(this).attr('href');
    $(section).css("display", "block")
    console.log(section)
    // if(small){
    //   $('#navlinks').css('height', '0')
    // }
  })
  // if(small){
  //   $('.menu-nav').on('click', function(){
  //     console.log("clicked the menu!")
  //     $('#navlinks').css('height', 'auto')
  //   })
  // }


});
