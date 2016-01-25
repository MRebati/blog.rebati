$(document).ready(function() {
  'use strict';
  $('#search-input').hide();
  $('.search-close-li').hide();
  $('html').niceScroll({
    cursorcolor: '#333',
    cursorborder: '0px',
    cursoropacitymin: '0',
    cursoropacitymax: '0.8'
  });

  $(window).on('scroll',function(){
    if($(window).scrollTop() > 20){
      $('#topscroll').fadeIn('slow');
    }
    else{
      $('#topscroll').fadeOut('slow');
    }
  });

  $('#topscroll').on('click',function(){
    $("html, body").animate({
             scrollTop: 0
        }, 'slow');
  });

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  function closeSearch() {
    var menuitem = $('.menu-item');
    var overlay = $('#search-curtain');
    var searchbtn = $('.search-bar');
    var closebtn = $('.search-close-li');
    $('.search-help').removeClass('search-help-show');
    $('.search-help').addClass('search-help-hide');
    setTimeout(function() {
      $('.search-help').addClass('hidden');
    });
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
      closebtn.removeClass('scaleup');
      closebtn.addClass('scaledown');
      setTimeout(function() {
        closebtn.css('display', 'none');
        searchbtn.removeClass('scaledown');
        searchbtn.addClass('scaleup');
      }, 200);
    }, 300);
  }

  function openSearch() {
    var menuitem = $('.menu-item');
    var overlay = $('#search-curtain');
    var searchbtn = $('.search-bar');
    var closebtn = $('.search-close-li');
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
      searchbtn.removeClass('scaleup');
      searchbtn.addClass('scaledown');
      setTimeout(function() {
        searchbtn.hide();
        closebtn.removeClass('scaledown');
        closebtn.addClass('scaleup');
        setTimeout(function() {
          closebtn.css('display', 'block');
          $('.search-help').removeClass('search-help-hide').removeClass('hidden');
          $('.search-help').addClass('search-help-show');
          setTimeout(function() {
            $('.search-help.show').show();
          }, 300);
          $('#query').focus();
        }, 200);
      }, 200);
    }, 300);
  }

  $('#search-curtain').on('click', function() {
    closeSearch();
  });

  $('.search-close-li').on('click', function() {
    closeSearch();
  });

  $('#search-icon').on('click', function() {
    openSearch();
  });
  $(window).resize(function() {
    var width = $(window).width();
    if (width > 650) {
      $('.nav-bar').removeAttr('style');
      $('.search-ul').show();
    }
  });
  $('#menu-icon').on('click', function() {
    closeSearch();
    $('.search-ul').fadeToggle();

    $('.nav-bar').slideToggle();
  });

  $('#query').on('keyup keypress change', function(e) {
    var text = $('#query').val().length;
    if(text >= 1){
      $('#links').fadeOut(function(){
        $('.search-help').css('height','60px');
        $('#search-enter').fadeIn();
      });
    }else{
      $('#search-enter').fadeOut(function(){
        $('.search-help').css('height','273px');
        $('#links').fadeIn();
      });
    }
});
});
