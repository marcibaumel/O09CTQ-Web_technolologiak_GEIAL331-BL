$(".img-p").mouseover(function(){
  $(this).animate({
    height: '+=150px',
    width: '+=100px'
  })
});

$(".img-p").mouseout(function(){
  $(this).animate({
    height: '-=150px',
    width: '-=100px'
  }, 1000)
});