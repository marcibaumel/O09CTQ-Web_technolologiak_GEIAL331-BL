/*
//Draft JS:

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

function getData(){
    var name =$("#inputFilmTitle").val();
    var year = $("#inputFilmYear").val();
   
    $.getJSON("http://www.omdbapi.com/?apikey=f51c1d39&t="+name+"&year="+year).then(function(data) {
        realData = data; 
    });

    if(realData.Response === "False"){
        alert("Somethings went wrong! Check your answers. ");
    }
    else{
        
        $("#film-poster").attr("src",realData.Poster);
        $("#film-title").text(realData.Title);
        $("#film-release").text(realData.Year);
        $("#film-runtime").text(realData.Runtime);
        //setTableBorder();
   }
}

function setTableBorder(){
    console.log($("#film-title").text());
    if($("#film-title").text() != ""){
        $("#omdb-table").addClass("omdb-border");
    }
}
*/


var realData;
const apiUrl = "http://www.omdbapi.com/?apikey=f51c1d39&t=";


function getOmdbData(title, releaseYear){
    return $.getJSON(apiUrl+title+"&year="+releaseYear).then(function(data){
      return {
        title:data.Title,
        poster:data.Poster,
        runtime: data.Runtime,
        year: data.Year,
        response: data.Response
      }
    });
}

//Test the get Omdb method working
getOmdbData('Kate', '2021').then(function(returndata){
    //console.log(returndata.poster);
});

//Omdb submit button logic
$("#omdb-submit-btn").click(function(){
    setOmdbData();
});

function setOmdbData(){
    var title =$("#inputFilmTitle").val();
    var releaseYear = $("#inputFilmYear").val();
   
    getOmdbData(title, releaseYear).then(function(returndata){
        if(returndata.response == "False" || releaseYear<1950 || releaseYear>2021){
            alert("Somethings went wrong! Check your answers. ");
            $("#omdb-table").removeClass("omdb-border");
            $("#film-poster").attr("src","");
            $("#film-title").text("");
            $("#film-release").text("");
            $("#film-runtime").text("");
        }
        else{   
            $("#omdb-table").addClass("omdb-border");
            $("#film-poster").attr("src",returndata.poster);
            $("#film-title").text(returndata.title);
            $("#film-release").text(returndata.year);
            $("#film-runtime").text(returndata.runtime);
       }
       $("#inputFilmTitle").val("");
       $("#inputFilmYear").val("");
    });

    
}