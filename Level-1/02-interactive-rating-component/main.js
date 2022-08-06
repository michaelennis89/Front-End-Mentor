document.addEventListener("DOMContentLoaded", function(){
    const button1 = document.getElementById("response-1");
    const button2 = document.getElementById("response-2");
    const button3 = document.getElementById("response-3");
    const button4 = document.getElementById("response-4");
    const button5 = document.getElementById("response-5");
    const submit = document.getElementById("button-submit");
    const primaryState = document.querySelector(".primary-state");
    const secondaryState = document.querySelector(".secondary-state");

    let choice = 0; 

    primaryState.setAttribute('display', true);
    secondaryState.setAttribute('display', false); 
    
    function clearFormatting(){
        button1.setAttribute('selected', false);
        button2.setAttribute('selected', false);
        button3.setAttribute('selected', false);
        button4.setAttribute('selected', false);
        button5.setAttribute('selected', false);
    }

    button1.addEventListener("click", function(){
        clearFormatting();
        button1.setAttribute('selected', true); 
        choice = 1;
    })
    button2.addEventListener("click", function(){
        clearFormatting();
        button2.setAttribute('selected', true); 
        choice = 2; 
    })
    button3.addEventListener("click", function(){
        clearFormatting();
        button3.setAttribute('selected', true); 
        choice = 3;
    })
    button4.addEventListener("click", function(){
        clearFormatting();
        button4.setAttribute('selected', true); 
        choice = 4;
    })
    button5.addEventListener("click", function(){
        clearFormatting();
        button5.setAttribute('selected', true); 
        choice = 5; 
    })

    submit.addEventListener("click", function(){
        if(choice != 0){
            console.log(choice);
            primaryState.setAttribute('display', false);
            secondaryState.setAttribute('display', true); 
            document.getElementById("user-rating").innerHTML = choice; 
        }
    })

})