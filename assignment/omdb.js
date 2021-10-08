/*
OMDB API CALLING JS CLASS
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
    //Input values
    var title =$("#inputFilmTitle").val();
    var releaseYear = $("#inputFilmYear").val();
   
    //Get the JSON from OMDB Api
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

    //Set input values null
    $("#inputFilmTitle").val("");
    $("#inputFilmYear").val("");
    });  
}