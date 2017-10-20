jQuery(document).ready(function(){
  jQuery('.first-slide').bxSlider({
    auto: true,
    responsive: true,
    mode: 'fade'
  });});

jQuery(document).ready(function(){
  jQuery('.second-slide').bxSlider({
    controls: true,
    responsive: true,
    slideWidth: 230,
    minSlides: 1,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 10,
    auto: true,
    prevText: '',
    nextText: '',
    captions: true,
    pager: false,
  });
});

