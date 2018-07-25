$(document).ready(function(){

$(".owl-carousel").owlCarousel({
	 animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:7000,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});

$('.cover-button p').click(function(){
	$('.cover-section').fadeOut("slow");
	$('.content-section').fadeIn("slow");
    $('.sun').fadeOut("slow");
})

$(window).on('scroll',function() {
     var scroll = parseInt($(window).scrollTop());
     if(scroll != 0){
     	$('.content-section-navbar').css({
     		position:'fixed'
     	})
     }else{
  		$('.content-section-navbar').css({
     		position:'relative'
     	})
     }
 });

$('i.fas.fa-bars').click(function(){
	$('.nav-menu-mobile-list').slideToggle('show');
})

});
