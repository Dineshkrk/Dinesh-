$(document).ready(function(){
$('.carousel').carousel({
  interval: 3000
})
});

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     autoplay:true,
     
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
         350:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
});


$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 3,
        autoWidth: true,
        slideMove: 2, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 300, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        speed: 1000,
        auto: false,
        item:1,
        slideMargin:0,
        loop:true
        

    });
});

// coding of my own

$(document).ready(function(){
$(window).on('scroll',function(){
if($(window).scrollTop()){
	$('.topbar').hide();
	$('.navbar-color').addClass('black');
		$('.navbar-color .navbar-nav .nav-link').css('color','black');
	}
	else{
		$('.topbar').show();
		$('.navbar-color').removeClass('black');
		$('.navbar-color .navbar-nav .nav-link').css('color','#f5ebeb;');
	}
})
});

$(document).ready(function(){
$('button').on('mouseenter',function(){
	$(this).css('background-color','rgba(110, 61, 61, 0.3)');
	})
$('button').on('mouseleave',function(){
	$(this).css('background-color','#ffc107');
	})
});



