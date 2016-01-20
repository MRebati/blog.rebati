$(document).ready(function(){
  'use strict';
  $('#questions').niceScroll();
});

$(function(){
  'use strict';
  $('#questions').niceScroll();
});

$('.nav-icon').first().click(function(){
  'use strict';
  var ul = $('.nav-bar > ul');
  if(ul.hasClass('nav-clicked')){
    ul.slideUp(function(){
      ul.removeClass('nav-clicked');
    });
  }else{
    ul.addClass('nav-clicked').slideDown();
  }
});

$(window).resize(function(){
  'use strict';
  var width = $(window).width();
  if(width > 650){
    $('.nav-icon').hide();
    $('.nav-bar > ul').removeClass('nav-clicked').show();
  }
  if(width <= 650){
    $('.nav-icon').show();
    $('.nav-bar > ul').hide();
  }
});

$(window).scroll(function () {
  'use strict';
  if ($(this).scrollTop() > 167) {
    $('.nav').first().css('position','fixed');
    $('.nav').first().css('top','0');
    $('.nav').first().css('width','100%');
    /*$('.nav').first().css('background','rgba(0,0,0,0.3), url("../../../Content/images/header.jpg") repeat fixed 0 10% / cover ');
    $('.main-header').css('height','40px').css('position','fixed');*/
  }else{
    $('.nav').first().removeAttr('style');
    /*$('.main-header').removeAttr('style');*/
  }
});