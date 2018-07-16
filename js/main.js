'use stict';
$(document).ready(function(){
  // lang start
  $('.lang a').click(function () {
    $(this).addClass('lang__rus-active').siblings().removeClass('lang__rus-active');
  });
  // lang end
  //slider start
  $('.searchus__blocks-js').slick({
    dots:true
  });
  $('.ouroffice__blocks-js').slick({
    dots:true
  });
  $('.news__blocks-js').slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots:true,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
  //slider end
  // burger start
  $('.burger').click(function () {
    $(this).toggleClass('burger__close');
    $('.header__menu').toggle();
  });
  // burger end

  // sticky start
  window.onscroll = function() {myFunction()};

// Get the navbar
  var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
  var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  // sticky end
});
