document.addEventListener("DOMContentLoaded", function () {
    const nameFirst = document.getElementById("name-first");
    const nameLast = document.getElementById("name-last");
    const email = document.getElementById("email");
    const password = document.getElementById("password"); 
    const button = document.getElementById("button");

    button.addEventListener("click", function (){
        let payload =   {
                firstName: nameFirst.value,
                lastName: nameLast.value,
                email: email.value,
                password: password.value,
        }
        console.log(payload);
    });


});