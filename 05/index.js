function Validation(){
    const name = $("#nameStudent").val();
    const neptunCode = $("#neptunCode").val();
    const birthday = $("#birthday").val();
    const birthPlace = $("#birthPlace").val();
    const motherName = $("#motherName").val();
    const address = $("#address").val();
    const age = $("#age").val();
    const school = $("#school").val();
    const favColor = $("#favColor").val();

    if(neptunCode.length !== 6){
        alert("Neptun kód hossza nem jó");
        $("#neptunCode").addClass("wrong-data");
    }
    else if(age<18 || age>80){
        alert("A kornak 18 és 80 között kell lennie");
    }
    else if(neptunCode.length === 6){
        $("#neptunCode").removeClass("wrong-data");
    }
    else {
        alert("Adatok elfogadva!");
        /*
        $("#nameStudent").val("");
        $("#neptunCode").val("");
        $("#birthday").val("");
        $("#motherName").val("");
        $("#address").val("");
        $("#age").val("");
        $("#school").val("");
        $("#favColor").val("");
        */
    }

}