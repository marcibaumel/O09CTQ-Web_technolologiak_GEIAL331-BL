/*
$("#omdb-submit-btn").click(function(){
    $.getJSON('http://www.omdbapi.com/?apikey=f51c1d39&t=Kate', function(data) {
    alert("hello");
    //alert(data.Title);
    //$("#poster").attr("src",data.Poster);
    //$('.imgTest').prepend('<img id="theImg" src="'+data.Poster+'" />').fadeIn(3000);

    });
});

function getOmdbData(){
    $.getJSON('http://www.omdbapi.com/?apikey=f51c1d39&t=Kate', function(data) {
    console.log(data.Title);
});}
*/

var realData;

function getData(){
    var name =$("#inputFilmTitle").val();
    var year = $("#inputFilmYear").val();
   
    $.getJSON("http://www.omdbapi.com/?apikey=f51c1d39&t="+name+"&year="+year, function(data) {
        realData = data; 
    });
}



$("#omdb-submit-btn").click(function(){
    getData();

    console.log(realData.Response);
    if(realData.Response === "False"){
        alert("Somethings went wrong! Check your answers. ");
    }
   else{
        setTableBorder();
        
        $("#film-poster").attr("src",realData.Poster);
        $("#film-title").text(realData.Title);
        $("#film-release").text(realData.Year);
        $("#film-runtime").text(realData.Runtime);
   }
   
    data = null;
});

function setTableBorder(){
    console.log($("#film-title").text());
    if($("#film-title").text() != ""){
        $("#omdb-table").addClass("omdb-border");
    }
}
