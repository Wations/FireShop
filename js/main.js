$(document).ready(()=> {

//Burguer-Menu
$('.burguerClick').on('click', function(e){
  e.preventDefault();
  $('.burguer-menu').slideToggle();
});
  

//Hero Dots
 $('.dot').on('click', ()=>{
    var index = $(event.currentTarget).index();
    //alert(index);
    $('.listaDot li').removeClass('dotCheck');
    $('.listaDot li').eq(index).addClass('dotCheck');

    $('#jquery-carousel li').removeClass('active');
    $('#jquery-carousel li').eq(index).addClass('active');
  });



//Time
  setInterval(function(){
    var currentSlide = $('.active');
    var nextSlide = $('.active').next();

    var currentDot = $('.dotCheck');
    var nextDot = $('.dotCheck').next();

    currentSlide.removeClass('active');
    currentDot.removeClass('dotCheck');
    
    
    if(nextSlide.length === 0){
      nextSlide = $('#jquery-carousel ul li').first();
      nextDot =$('.dot').first();
    }
    nextSlide.addClass('active');
    nextDot.addClass('dotCheck');
  }, 7000);
	
//Hero Slide
	$('.next').on('click', ()=>{
    
    var currentSlide = $('.active');
    var nextSlide = $('.active').next();

    var currentDot = $('.dotCheck');
    var nextDot = $('.dotCheck').next();

    currentSlide.removeClass('active');
    currentDot.removeClass('dotCheck');
    
    
    if(nextSlide.length === 0){
      nextSlide = $('#jquery-carousel ul li').first();
      nextDot =$('.dot').first();
    }
    nextSlide.addClass('active');
    nextDot.addClass('dotCheck');

  });

  
  
  $('.prev').on('click', ()=>{
    var currentSlide = $('.active');
    var prevSlide = $('.active').prev();

    var currentDot= $('.dotCheck');
    var prevDot= $('.dotCheck').prev();

    currentSlide.removeClass('active');
    currentDot.removeClass('dotCheck');
    
    if(prevSlide.length === 0){
      prevSlide = $('#jquery-carousel ul li').last();
      prevDot = $('.dot').last();
    }
    prevSlide.addClass('active');
    prevDot.addClass('dotCheck');
  });

// Carousel

  $('.cta_right').click(function(){
     $('.imagesCarousel > li:last-child')
       .prev()
       .end()
       .prependTo('.imagesCarousel');
   });
     

   $('.cta_left').click(function(){
     $('.imagesCarousel > li:first-child')
       .next()
       .end()
       .appendTo('.imagesCarousel');
   });



//Shadow Box (plugin)
   baguetteBox.run('.produtImage',{
    captions: function(element) {
        return element.getElementsByTagName('img')[0].alt;
    }
});

//Zoom (plugin)
  
   $('.product').zoom({
    touch: false,
    duration:50,
    on: 'grab'
   });

//pass the images
  $(".miniatura").click(function() {


     var myClass = $(event.currentTarget).index();
      var imagem = $('.miniatura img').eq(myClass).attr('src');
      $('#imagemGrande').attr('src', imagem);
      $('.product').zoom({
        touch: false,
        duration:200,
        on: 'grab'
     });
    
    
  });

//tiles popup

  $("div > div", ".tiles").on('click', function(e){
    e.preventDefault();
    $(event.currentTarget).clone().appendTo('.window');
    $('.popUp').show();
  });

  $('.popUp').on('click',()=>{
    $('.window div').detach();
    $(event.currentTarget).hide();
  });

});