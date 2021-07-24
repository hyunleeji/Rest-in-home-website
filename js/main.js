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
        // $(".menuPopup").css("display","block");
        $(".menuPopup").css("z-index","97");
        $(".menuIcon").css("display","none");
    });

    $('.menuText .xi-close').click(function () {
        $(".menuPopup").css("opacity","0");
        // $(".menuPopup").css("display","none");
        $(".menuPopup").css("z-index","-1");
        $(".menuIcon").css("display","block");
    });

    $(window).resize(function () {
      var width = $(window).width();
      if (width>=1200) {
          $('.search').click(function () {
              $(".searchpopup").css("top","0vh");
          });
          $('.xi-close').click(function () {
              $(".searchpopup").css("top","-80vh");
          });
      } else if (width <1200) {
        $('.search').click(function () {
          $(".searchpopup").css("top","0vh");
        });
        $('.xi-close').click(function () {
          $(".searchpopup").css("top","-100vh");
        });
      }
  });

    // $(window).resize(function () {
    // $('.search').click(function () {
    //     $(".searchpopup").css("top","0vh");
    // });

    // $('.xi-close').click(function () {
    //     $(".searchpopup").css("top","-80vh");
    // });
    // )}

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


  // $(function() {
  //   $(".allmenu a").one("click", function() {
  //     $(".allmenu").find(".menuTeb").css("display","block");
  //     $(this).click(function() {
  //       $('.menuTeb').css("display","none");
  //     });
  //   })
  // })
  
  // $(function() {
  //   $(".allmenu a").one("click", function() {
  //     $(".allmenu").find(".menuTeb").css("display","block");
  //     $(this).click(function() {
  //       $('.menuTeb').css("display","none");
  //     });
  //   })
  // })

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


  // $(function() {
  //   $(".allmenu a").on("mouseleave", function() {
  //     $('.menuTeb').css("display","none");
  //   })
  // })


  // $(function() {
  //   $(".allmenu a").on("click", function() {
  //     var inmenu = $(".allmenu").find('.menuTeb').stop().slideUp();
  //     if (!inmenu.is(':visible')) {
  //       $(".allmenu").find(".menuTeb").stop().slideUp();
  //     }
  //   })
  // })

  // $(function() {
  //   $(".allmenu a").on("click", function() {
  //     var inmenu = $(".inMenu").slideDown();
  //   })
  // })

  // $(function() {
  //   $(".manuTitle").on("click", function() {
  //      var inmenu = $(".inMenu").siblings()
  //      if (!inmenu.is(":visible")) {
  //        $(".allmenu").find(".inMenu").stop().slideUp();
  //        inmenu.stop().slideDown();
  //        $(".manuTitle").removeClass("hover");
  //        $(".manuTitle").addClass("hover");
  //      } else {
  //       $(".allmenu").find(".inMenu").stop().slideUp();
  //       $(".manuTitle").removeClass("hover");
  //      }
  //   })
  // })


    // $(".category h3").on("mouseover", function() {
    //     $(".category li").css("display", "block");
    //     $(".gnb").css("background-color", "white");
    //   });

    // $(".category h3").on("mouseleave", function() {
    //     $(".category li").css("opacity", "0");
    //     $(".gnb").css("background-color", "transparent");
    //     $(".gnb").css("box-shadow", "0px");
    //   });

    // $('.head a').click(function () {
    //     $(this).animate({opacity:0, fontSize:'0px'}, 1500);
    // });
});
