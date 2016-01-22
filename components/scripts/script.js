$(document).ready(function() {
  'use strict';
  $('#search-input').hide();
  $('html').niceScroll({
    cursorcolor: '#333',
    cursorborder: '0px',
    cursoropacitymin: '0',
    cursoropacitymax: '0.8'
  });
  $('#search-close').on('click', function() {
    var menuitem = $('.menu-item');
    var overlay = $('#search-curtain');
    var searchbtn = $('#search-icon');
    var closebtn = $('#search-close');
    $('#search-input').removeClass('search-input-show');
    $('#search-input').addClass('search-input-hide');
    setTimeout(function() {
      $('#search-input').hide();
      menuitem.removeClass('search-show');
      menuitem.addClass('search-hide');
      overlay.fadeOut(300);
      $('html').removeClass('full-html');
      setTimeout(function() {
        menuitem.show();
      }, 300);
        closebtn.addClass('scaledown');
        setTimeout(function(){
          closebtn.hide();
          searchbtn.addClass('scaleup');
        },200);
    }, 300);
  });

  $('#search-icon').on('click', function() {
    var menuitem = $('.menu-item');
    var overlay = $('#search-curtain');
    var searchbtn = $('#search-icon');
    var closebtn = $('#search-close');
    menuitem.removeClass('search-hide');
    menuitem.addClass('search-show');
    $('html').addClass('full-html');
    overlay.fadeIn(300);
    setTimeout(function() {
      menuitem.hide();
      $('#search-input').removeClass('search-input-hide');
      $('#search-input').addClass('search-input-show');
      setTimeout(function() {
        $('#search-input').show();
      }, 300);
      searchbtn.addClass('scaledown');
      setTimeout(function() {
        closebtn.addClass('scaledown');
      }, 200);
    }, 300);
  });
});
