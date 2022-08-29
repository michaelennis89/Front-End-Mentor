function ValidateEmail(inputText) {
    var re = /\S+@\S+\.\S+/;
    return re.test(inputText);
}

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input"); 
    const emailButton = document.getElementById("email-button"); 
    const emailInvalid = document.getElementById("email-invalid"); 

    emailInvalid.setAttribute('display', false); 

    emailButton.addEventListener("click", function(){
        const inputText = emailInput.value;

        if (!ValidateEmail(inputText)) {
            emailInput.setCustomValidity("Invalid Email");
            emailInvalid.setAttribute('display', true); 
        }
        else {
            emailInput.setCustomValidity("");
            emailInvalid.setAttribute('display', false); 
        }
        
    });

});