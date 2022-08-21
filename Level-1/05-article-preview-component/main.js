document.addEventListener("DOMContentLoaded", function() {
    const shareIcon = document.getElementById("share-icon");
    const shareIconWhite = document.getElementById("share-icon-white");
    const sharePopUp = document.getElementById("share-pop-up");

    shareIcon.setAttribute('display', true); 
    shareIconWhite.setAttribute('display', false); 
    sharePopUp.setAttribute('display', false);
    

    shareIcon.addEventListener("click", function(){
        shareIcon.setAttribute('display', false); 
        shareIconWhite.setAttribute('display', true); 
        sharePopUp.setAttribute('display', true);
    })

    shareIconWhite.addEventListener("click", function(){
        shareIcon.setAttribute('display', true); 
        shareIconWhite.setAttribute('display', false); 
        sharePopUp.setAttribute('display', false);
    })
})