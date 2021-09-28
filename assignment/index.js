$("#jo").click(function(){
    $.getJSON('http://www.omdbapi.com/?apikey=f51c1d39&t=Kate', function(data) {
    console.log(data.Poster);
    //$("#poster").attr("src",data.Poster);
    $('.imgTest').prepend('<img id="theImg" src="'+data.Poster+'" />').fadeIn(3000);

    });
});

