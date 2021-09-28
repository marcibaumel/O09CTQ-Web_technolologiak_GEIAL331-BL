/*
$("#omdb-submit-btn").click(function(){
    $.getJSON('http://www.omdbapi.com/?apikey=f51c1d39&t=Kate', function(data) {
    alert("hello");
    //alert(data.Title);
    //$("#poster").attr("src",data.Poster);
    //$('.imgTest').prepend('<img id="theImg" src="'+data.Poster+'" />').fadeIn(3000);

    });
});
*/

/*
function getOmdbData(){
    $.getJSON('http://www.omdbapi.com/?apikey=f51c1d39&t=Kate', function(data) {
    console.log(data.Title);
});}
*/

var realData;

$.getJSON('http://www.omdbapi.com/?apikey=f51c1d39&t=Shrek', function(data) {
    console.log(data.Title);
    realData = data; 
});


$("#omdb-submit-btn").click(function(){

    if(realData.Title == undefined){
        alert("Somethings went wrong!");
    }
    //console.log(realData.Title);
    $("#poster").attr("src",realData.Poster);
});
