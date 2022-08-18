document.addEventListener("DOMContentLoaded", function () {
    const question1 = document.getElementById("question-1");
    const question2 = document.getElementById("question-2");
    const question3 = document.getElementById("question-3");
    const question4 = document.getElementById("question-4");
    const question5 = document.getElementById("question-5");
    const answer1 = document.getElementById("answer-1");
    const answer2 = document.getElementById("answer-2");
    const answer3 = document.getElementById("answer-3");
    const answer4 = document.getElementById("answer-4");
    const answer5 = document.getElementById("answer-5");
    const arrow1 = document.getElementById("arrow-1");
    const arrow2 = document.getElementById("arrow-2");
    const arrow3 = document.getElementById("arrow-3");
    const arrow4 = document.getElementById("arrow-4");
    const arrow5 = document.getElementById("arrow-5");

    function closeAll(){
        question1.setAttribute('display', false);
        question2.setAttribute('display', false);
        question3.setAttribute('display', false);
        question4.setAttribute('display', false);
        question5.setAttribute('display', false);
        answer1.setAttribute('display', false);
        answer2.setAttribute('display', false);
        answer3.setAttribute('display', false);
        answer4.setAttribute('display', false);
        answer5.setAttribute('display', false);
        arrow1.setAttribute('display', false);
        arrow2.setAttribute('display', false);
        arrow3.setAttribute('display', false);
        arrow4.setAttribute('display', false);
        arrow5.setAttribute('display', false);
    };

    closeAll(); 

    let choice = 0;

    question1.addEventListener("click", function () {
        if (question1.getAttribute('display') == 'false') {
            closeAll();
            question1.setAttribute('display', true);
            arrow1.setAttribute('display', true);
            answer1.setAttribute('display', true);
        } else {
            closeAll();
        }
    })
    question2.addEventListener("click", function () {
        if (question2.getAttribute('display') == 'false') {
            closeAll();
            question2.setAttribute('display', true);
            arrow2.setAttribute('display', true);
            answer2.setAttribute('display', true);
        } else {
            closeAll();
        }
    })
    question3.addEventListener("click", function () {
        if (question3.getAttribute('display') == 'false') {
            closeAll();
            question3.setAttribute('display', true);
            arrow3.setAttribute('display', true);
            answer3.setAttribute('display', true);
        } else {
            closeAll();
        }
    })
    question4.addEventListener("click", function () {
        if (question4.getAttribute('display') == 'false') {
            closeAll();
            question4.setAttribute('display', true);
            arrow4.setAttribute('display', true);
            answer4.setAttribute('display', true);
        } else {
            closeAll();
        }
    })
    question5.addEventListener("click", function () {
        if (question5.getAttribute('display') == 'false') {
            closeAll();
            question5.setAttribute('display', true);
            arrow5.setAttribute('display', true);
            answer5.setAttribute('display', true);
        } else {
            closeAll();
        }
    })

})