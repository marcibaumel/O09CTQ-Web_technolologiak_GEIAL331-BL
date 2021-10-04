/*
const imgUrl = "/imgs/phone2.png";
//$("#phone-img").fadeIn();



$("#phone-img").load(function(){
  $("#phone-img").fadeIn();
})

*/
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