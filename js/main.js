$(document).ready(function(){   
    var mainHomeSwiper = new Swiper('.mySwiper', {
        loop : true,
        effect : 'fade',
        speed:1000,
        fadeEffect: { crossFade: true },
        pagination : { 
            el : '.mainBody .mainHome .swiper-pagination',
            clickable : true,
        },
        autoplay : {  
          delay : 3000, 
        },
        navigation: {
            nextEl: '.mainHome .swiper-button-next',
            prevEl: '.mainHome .swiper-button-prev',
        },
    });

    $('.menuIcon').click(function () {
        $(".menuPopup").css("opacity","1");
        $(".menuPopup").css("z-index","97");
        $(".menuPopup").css("width","100vw");
        $(".menuIcon").css("display","none");
        $(".headlogo").css("opacity","0");
    });

    $('.menuText .xi-close').click(function () {
        $(".menuPopup").css("opacity","0");
        $(".menuPopup").css("z-index","-1");
        $(".menuIcon").css("display","block");
        $(".headlogo").css("opacity","1");
        $('.menuText > .allmenu').find('.menuTeb').stop().slideUp();
    });

    $('.search').click(function () {
      $(".searchpopup").css("top","0vh");
      $(".headlogo").css("opacity","0");
    });
    $('.xi-close').click(function () {
      $(".searchpopup").css("top","-110vh");
      $(".headlogo").css("opacity","1");
    });

    $(window).resize(function () {
      var width = $(window).width();
      if (width <1200) {
        $('.search').click(function () {
          $(".searchpopup").css("top","0vh");
        });
        $('.xi-close').click(function () {
          $(".searchpopup").css("top","-130vh");
        });
      } 
  });

    $(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.scrollTop').css("opacity","1");
		}else{
			$('.scrollTop').css("opacity","0");
		}
	});

    $('.scrollTop').click(
        function() {
            $('html, body').stop().animate({scrollTop: $('body').offset().top}, 300);
            return false;
        }
    );

    var $st = $('.pagination');
    var $slickEl = $('.center');
    
    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $st.text(i + ' of ' + slick.slideCount);
    });

    $slickEl.slick({
      centerMode: true,
      centerPadding: '230px',
      slidesToShow: 1,
      focusOnSelect: true,
      dots: true,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    

    $('.scrollTop').click(
        function() {
            $('html, body').stop().animate({scrollTop: $('body').offset().top}, 300);
            return false;
        }
    );

    $(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.scrollTop').css("opacity","1");
		}else{
			$('.scrollTop').css("opacity","0");
		}
	});

 
  $(function() {
    $("button").on("click", function() {
      var items = $(".iteminfo p").html();
      $("#text").html(items);
    })
  })

  $('.menuPopup .menuText > .allmenu > li').each(function() {
    $(this).not('.link').children("a").off("click").on("click", function(e) {
      e.preventDefault();
      var depth2 = $(this).siblings('.menuTeb');
      if (!depth2.is(':visible')) {
        $('.menuText > .allmenu').find('.menuTeb').stop().slideUp();
        depth2.stop().slideDown();
        $('.menuText > .allmenu > li').removeClass('hover');
        $(this).parent().addClass('hover');
      } else {
        $('.menuText > .allmenu').find('.menuTeb').stop().slideUp();
        $('.menuText > .allmenu > li').removeClass('hover');
        $('.menuTeb').toggleClass('changed');
        $('.changed').css("display","none");
      };
    });
  });
});

$(".wrapSelect > div > span > .fa-angle-down").click(function(){
  $(".wrapSelect > div > div").toggle();
});

$(".question ul").click(function(e) {
  e.preventDefault();
  $(this).siblings().find('.answer').slideUp(200);

  if ( $(this).find('.answer').is(':hidden') ) {
      $(this).find('.answer').slideDown(200);
      $(this).addClass('current');
      $(this).siblings().removeClass('current');
  }
  else {
      $(this).find('.answer').slideUp(200);
      $(this).removeClass('current');
  }
});