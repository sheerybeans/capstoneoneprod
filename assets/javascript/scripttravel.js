$(document).ready(function(){
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

});