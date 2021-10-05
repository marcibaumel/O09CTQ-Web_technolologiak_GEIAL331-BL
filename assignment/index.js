$(".img-p").mouseover(function(){
  $(this).animate({
    height: '+=20px',
    width: '+=20px'
  })
});

$(".img-p").mouseout(function(){
  $(this).animate({
    height: '-=20px',
    width: '-=20px'
  })
});