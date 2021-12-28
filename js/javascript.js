/*  
** Javascript
** Author: Jeffrey Widmer
** Company: GYSO AG
** Date: 28.12.2021
** ||@  = Überschriften
** ||   = Erklärung
*/


/* || START ——————————————————————————————————————————————————————————————————————————————————————————————— */
/*
$(function() {
  $('.accordion_btn').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
      .stop()
      .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
      .stop()
      .slideDown(300);
    }
  });
});
*/

$(function() {
  $('.accordion_btn').on('click', function() {
    $(this).toggleClass('active');
    $accordion_content = $(this).next('.accordion_panel');
    $('.accordion_panel').not($accordion_content).slideUp();
    $('.accordion_panel').not($accordion_content).prev('.accordion_btn').removeClass('active');
    $accordion_content.stop(true, true).slideToggle(400);
  });
});


/* || ENDE ———————————————————————————————————————————————————————————————————————————————————————————————— */
