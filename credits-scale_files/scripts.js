$(document).ready(function(){

	// Block Rotate
	var index = 1;
	function Rotator() {
		$('.block-info').hide();
		$('.block' + index).fadeIn('300');
		var count = 4;
		index++;
		if(index > count) {
			index = 1;
		}
	}

	$(document).ready(function() {
		Rotator();
		setInterval(Rotator, 3000);
	});

    $(document).ready(function() {
        var popupBoxes = $('.popup-box');
      
        // Добавляем обработчик события для клика на документе
        $(document).click(function(event) {
          var isInsidePopup = false;
          for (var i = 0; i < popupBoxes.length; i++) {
            if ($.contains(popupBoxes[i], event.target)) {
              isInsidePopup = true;
              break;
            }
          }
      
          if (!isInsidePopup) {
            var popupOuterBoxes = $('.popup-outer-box');
            popupOuterBoxes.removeClass('active');
            $('body').removeClass('popup-open');
          }
        });
    });
    $(document).ready(function() {
        var help = $('.tile-help');
        var helpContentWrap = $('.tile-help-content-wrap');
      
        help.click(function(event) {
          event.stopPropagation();
        });
      
        // Добавляем обработчик события для клика на документе
        $(document).click(function(event) {
          if (!helpContentWrap.is(event.target) && help.hasClass('active')) {
            help.removeClass('active');
          }
        });
      });

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


    //popups
    let popupCurrent;
    $('.js-popup-open').on('click', function () {
        $('.popup-outer-box').removeClass('active');
        $('body').addClass('popup-open');
        popupCurrent = $(this).attr('data-popup');
		if ( $.cookie('credits-cookie-sto') == null ) {
			$('.popup-outer-box[id="' + popupCurrent + '"]').addClass('active');
		} else {
			if (popupCurrent == 'popup-STO') popupCurrent = 'popup-STO-succefull';
			$('.popup-outer-box[id="' + popupCurrent + '"]').addClass('active');
		}
        return false;
    })
    $('.js-popup-close').on('click', function () {
        $('body').removeClass('popup-open');
        $('.popup-outer-box').removeClass('active');
		$.cookie('credits-cookie-accept', 'accept', { expires: 1, path: '/' });
        return false;
    })

    //help
    $('.js-help .help-ico').on('click', function() {
        $('.js-help.active').removeClass('active');
        $(this).parent('.js-help').addClass('active');
        $('body').addClass('help-open');
    })
    $('.js-help-close').on('click', function() {
        $(this).parents('.js-help').removeClass('active');
        $('body').removeClass('help-open');
        return false;
    })
    $('.elm-overlay').on('click', function() {
        $('.js-help.active').removeClass('active');
        $('body').removeClass('help-open');
        return false;
    })

    //item-tile-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').append('<video width="100%" height="100%" autoplay="autoplay" controls style="margin-top: -54.84%"><source src="' + videoURL + '" type="video/mp4" /></video>')
        return false;
    })

	// Cookies
	$( ".credits-cookie-accept" ).click(function() {
		$('body').removeClass('popup-open');
		$( ".popup-outer-box" ).hide('slow');
		$.cookie('credits-cookie-accept', 'accept', { expires: 365, path: '/' });
	});

	// Disclamer
    $('.credits-cookie-disclamer').on('click', function () {
        $('.popup-disclamer').removeClass('active');
		$.cookie('credits-cookie-disclamer', 'disclamer', { expires: 30, path: '/' });
        return false;
    })
    
	if ( $.cookie('credits-cookie-disclamer') == null ) {
		setTimeout(function() {
			$( ".popup-disclamer" ).addClass('active');
		}, 2000);
	}
    // Disclamer

    /*
    if ( $.cookie('credits-cookie-sto') == null ) {
		setTimeout(function() {
			$( ".popup-form-join" ).addClass('active');
		}, 30000);
	}
    */

	if ( $.cookie('credits-cookie-accept') == null ) {
		setTimeout(function() {
			$( "#popup-cookies-footer" ).addClass('active');
		}, 3000);
	}

    //item-tile-video
	/*
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })
	*/
    
    


    //swipebox
    $('[data-swipebox]').swipebox();


    if (!!$('.header').offset()) {
        var stickyTop = $('.wrap').offset().top + 700;
        $(window).scroll(function () {
            var windowTop = $(window).scrollTop();
            if (stickyTop < windowTop) {
                $('.wrap').addClass('header-fixed');
            } else {
                $('.wrap').removeClass('header-fixed');
            }
        });
    }
    if (!!$('.main-menu-box.menu-top').offset()) {
        var menuStickyTop = $('.wrap').offset().top + $('.main-menu-box.menu-top').outerHeight();
        $(window).scroll(function () {
            var menuWindowTop = $(window).scrollTop();
            if (menuStickyTop < menuWindowTop) {
                $('.wrap').addClass('menu-fixed');
            } else {
                $('.wrap').removeClass('menu-fixed');
            }
        });
    }

    if (!!$('.header').offset()) {
        var stickyTops = $('.header').offset().top + 1000;
        $(window).scroll(function () {
            var windowTops = $(window).scrollTop();
            if (stickyTops < windowTops) {
                $('.popup-corner-panel').addClass('removeadd');
                $('.popup-corner-panel').removeClass('remove');
            } else {
                $('.popup-corner-panel').addClass('remove');
                $('.popup-corner-panel').removeClass('removeadd');
            }
        });
    }

    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
            $('.js-popup-wrap').removeClass('popup-right');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('main-menu-wrap')) {
                $('body').addClass('menu-show');
            }
            pLeft = $(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;
            pWidth = $(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();
            pMax = pLeft + pWidth;
            if ( pMax > $('.wrap').width() ) {
                $(this).parent('.js-popup-wrap').addClass('popup-right');
            } else {
                $('.js-popup-wrap').removeClass('popup-right');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function() {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        return false;
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function() {
        if ($(this).hasClass('js-popup-select')) {
            if ($(this).find('.js-popup-block').find('.active').length>0) {
                $(this).find('.js-btn-toggle').addClass('selected');
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
            } else {
                $(this).find('.js-btn-toggle').removeClass('selected');
            }
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tab-block').removeClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        $('.js-popup-wrap').each(function() {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length>0) {
                    $(this).find('.js-btn-toggle').addClass('selected');
                    var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                    //$(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
                    $(this).find('.js-btn-toggle').children('.button-title').val(currentSelect);
                } else {
                    $(this).find('.js-btn-toggle').removeClass('selected');
                }
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //tabs
    $('.js-tabs-nav').each(function() {
        $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
    })
    $('.js-tab-title').each(function() {
        if ($(this).hasClass('active')) {
            $(this).next('.js-tab-content').show(0);
        }
    })
    $('.js-tabs-nav').on('click', 'a[data-tab]', function() {
        if ($(this).hasClass('active')) {} else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        return false;
    })
    $('.js-tab-title').on('click' , function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.js-tab-content').slideUp(200);
        } else {
            $(this).addClass('active').next('.js-tab-content').slideDown(200);
        }
    })
	
    //gallery slider
    if (!!$('.overview-media-box').offset()) {
        let pSlider = $('.overview-media-box .slider-wrap .slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.overview-media-box .slider-wrap .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.overview-media-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
            $('.overview-media-box .slider-preview-wrap .elm-photo[data-slide="' + currentSlide + '"]').parent().addClass('active');
        });
        $('.overview-media-box .slider-preview-wrap .slider .elm-photo').click(function () {
            let newSlide = $(this).attr('data-slide');
            $('.overview-media-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
            $(this).parent().addClass('active');
            $('.overview-media-box .slider-wrap .slider').slick('slickGoTo', newSlide);
            return false;
        })
        $('.overview-media-box .elm-photo[data-slide="0"]').parent('.sl-wrap').addClass('active');
    }
    $('.slider-outer-wrap .slider-nav-wrap .ico-arrow-prev').on('click', function () {
        $(this).parents('.slider-outer-wrap').find('.slider-wrap').find('.ico-arrow-prev').click();
        return false;
    })
    $('.slider-outer-wrap .slider-nav-wrap .ico-arrow-next').on('click', function () {
        $(this).parents('.slider-outer-wrap').find('.slider-wrap').find('.ico-arrow-next').click();
        return false;
    })
    
    
    //main menu box scroll
    if ($('.main-menu-box').offset()) {
        $('.main-menu-box').each(function() {
            let currentElement = $(this).find('.menu');
            let currentElementRightPos = (currentElement.find('li:last').offset().left)+currentElement.find('li:last').width();
            let currentElementInnerWidth = (currentElement.width()+64);
            let currentElementLeft = currentElement.scrollLeft();
            if (currentElementLeft > 0) {
                $(this).find('.button-menu-prev').addClass('active');
            } else {
                $(this).find('.button-menu-prev').removeClass('active');
            }
            if (currentElementRightPos >= currentElementInnerWidth) {
                $(this).find('.button-menu-next').addClass('active');
            } else {
                $(this).find('.button-menu-next').removeClass('active');
            }
        })
        $('.main-menu-box .menu').scroll(function() {
            let currentElement = $(this);
            let currentElementRightPos = (currentElement.find('li:last').offset().left)+currentElement.find('li:last').width();
            let currentElementInnerWidth = (currentElement.width()+64);
            let currentElementLeft = currentElement.scrollLeft();
            if (currentElementLeft > 0) {
                $(this).parents('.main-menu-box').find('.button-menu-prev').addClass('active');
            } else {
                $(this).parents('.main-menu-box').find('.button-menu-prev').removeClass('active');
            }
            if (currentElementRightPos >= currentElementInnerWidth) {
                $(this).parents('.main-menu-box').find('.button-menu-next').addClass('active');
            } else {
                $(this).parents('.main-menu-box').find('.button-menu-next').removeClass('active');
            }
        })
        $('.main-menu-box .button-menu-prev').on('click', function() {
            let currentElement = $(this).parents('.main-menu-box').find('.menu');
            let currentElementLeft = currentElement.scrollLeft() - 300;
            console.log(currentElementLeft)
            currentElement.animate({scrollLeft: currentElementLeft}, 800);
            return false;
        })
        $('.main-menu-box .button-menu-next').on('click', function() {
            let currentElement = $(this).parents('.main-menu-box').find('.menu');
            let currentElementLeft = currentElement.scrollLeft() + 300;
            console.log(currentElementLeft)
            currentElement.animate({scrollLeft: currentElementLeft}, 800);
            return false;
        })
    }
	
/* 10-20.2.2023 */
$('.country-options .option-list button').click(function(){
	let country=$(this).find('.country-name span').html();
	$('.popup-form-box input[name=Strana]').val(country);
	$('.country-selector .selector').removeClass('active');
});
$('.popup-form-box input[name=Strana]').focus(function(){
	//$('.country-selector .selector').addClass('active');
}).keyup(function(){
	const Sel=$('.country-selector .selector');
	const Input=$(this);
	var val=Input.val().trim();
	$('.country-options .option-list button').each(function(){
		let cN=$(this).find('.english').text();
		let reg=new RegExp('^'+val+'.*$','i');
		if(cN.search(reg)==-1)
			$(this).hide();
		else
			$(this).show();
	});
	Sel.addClass('active');
	if($('.country-options .option-list button:visible').length==0)
		Sel.removeClass('active');
	else
		Sel.addClass('active');
}).closest('.inp-button').click(function(){	
	let Sel=$('.country-selector .selector');
	if(Sel.hasClass('active'))
		Sel.removeClass('active');
	else
		Sel.addClass('active');
});
$('.frm-main-select .button-title').focus(function(e){
	$(this).blur();
});
$('.popup-form-box').submit(function(e){
	var Strana=$('.popup-form-box input[name=Strana]').val().trim();
	$('.popup-form-box input[name=Strana]').val(Strana);
	var wrongCountry=true;
	$('.country-options .option-list button').each(function(){
		let cN=$(this).find('.english').text();
		if(Strana==cN)			
			wrongCountry=false;			
	});	
	if(wrongCountry){
		$('.popup-form-box input[name=Strana]').val('');
		$('.country-selector .selector').removeClass('active');
		$('.country-options .option-list button').show();
		alert('Select a country from the list');
		return false;
	}
	const F=$(this);
	const s=F.find('input:submit').val();
	e.preventDefault();
	let serF=F.serializeArray();
	let checkCaptcha=serF[5].value;
	if(!checkCaptcha){
		alert('Confirm that you are not a robot');
		return false;
	}
	$.ajax({
		data:F.serialize(),
		method:'post',
		url: '/ajax.php',
		beforeSend: function(){			
			F.find('input:submit').attr('disabled',true).val('Wait . . .');
		},
		success: function(d){
			F.find('input:submit').val('Форма уже отправлена');
			if(d.substring(0, 1)!=1 && d.substring(0, 1)!=-1){
				alert(d);
				return false;
			}
			if(d.substring(0, 1)==1) {
				$('.js-popup-open[data-popup=popup-STO-succefull]').click();
				$('#popup-STO').removeClass('active');
				$('#popup-STO-succefull').addClass('active');
				$.cookie('credits-cookie-sto', 'accept', { expires: 1, path: '/' });
			} else
				alert('Failed to write form data');
		}
	});
});
$(document).click(function(e){	
	if($(e.target).attr('name')!='Strana' && !$(e.target).hasClass('inp-button'))
		$('.country-selector .selector').removeClass('active');
});
});
