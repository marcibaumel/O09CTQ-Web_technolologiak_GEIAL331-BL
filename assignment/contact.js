$("#contatct-submit-btn").click(function(){
    contactVerifying();
});

function contactVerifying(){
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var birth = $("#inputBirth").val();
    
    var birthInYear = getAge(birth);
   
    if(validateEmail(email) && (birthInYear>18 && birthInYear<90)){
        alert("Valid information, soon I will contact with you!");
        inputFieldCleaner();
    }
    else{
        alert("Not valid information");
        inputFieldCleaner();
    }
    
}

function inputFieldCleaner(){
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputBirth").val("");
}

function validationMessage(){

}

function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}