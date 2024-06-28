const questions = [
    {
        question: "Which club did drogba played for in England?",
        answers:
        [
            {text: "Chelsea", correct: true},
            {text: "ManCity", correct: false},
            {text: "Liverpool", correct: false},
            {text: "Arsernal", correct: false},
        ]
    },

    {
        question: "which club won the just concluded UEFA CHAMPIONS LEAGUE?",
        answers: 
        [
            {text: "Chelsea", correct: false},
            {text: "ManCity", correct: true},
            {text: "Liverpool", correct: false},
            {text: "Arsernal", correct: false},
        ]
    },

    {
        question: "Cristiano Ronaldo is from which country?",
        answers: 
        [
            {text: "Spain", correct: false},
            {text: "England", correct: false},
            {text: "Nigeria", correct: false},
            {text: "Portugal", correct: true},
        ]
    },

    {
        question: "Kylian Mbakpe plays with which club in France?",
        answers: 
        [
            {text: "Chelsea", correct: false},
            {text: "ManCity", correct: false},
            {text: "PSG", correct: true},
            {text: "Arsernal", correct: false},
        ]
    },
    
    {
        question: "Moi Sala plays with which club in England?",
        answers: 
        [
            {text: "Liverpool", correct: false},
            {text: "ManCity", correct: false},
            {text: "PSG", correct: true},
            {text: "Arsernal", correct: false},
        ]
    },
]

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNumber = currentQuestionIndex + 1;
   document.getElementById("questions").innerHTML = questionNumber + " . " + currentQuestion.question;

//    for (let i = 0; i < 4; i++) {
//     const btn = document.getElementById(`btn${i}`;)
//     btn.innerText = answer.text;
//     options.appendChild(btn);
//    }


   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("remark");
    options.appendChild(button);
    if(answer.correct){
        button.stanley = answer.correct;
    };
    button.addEventListener("click", selectAnswer);
   });

};

function resetState(){
while(document.getElementById("options").firstChild){
    document.getElementById("options").removeChild(document.getElementById("options").firstChild);
}
};


function startQuiz() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("btn").style.display = "none";
    showQuestion();
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.stanley === true;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");   
    }

    Array.from(options.children).forEach(button => {
        if(button.stanley === "true"){
            button.classList.add("correct");
        };
        button.disabled = true;  
    });
    document.getElementById("btn").style.display = "block"; 

    function showResult() {
        document.getElementById("show-result-btn").style.display = "block"
    }
    
    
    function anotherButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
           showResult()
        }
    }
    
    document.getElementById("btn").addEventListener("click", ()=>{
        if (currentQuestionIndex < questions.length) {
            anotherButton();
        } else {
            startQuiz();
        }
    })
}

document.getElementById("start-btn").addEventListener("click", startQuiz);









// / let questions = [
//     {
//         question: 'What does gato mean in spanish?',
//         options: ['dogs', 'cat', 'rat', 'bird'], 
//         correctAnswer: 1
//     },
    
//   {
//         question2: 'What is the name of spanish league?',
//         options2: ['premiership', 'serie A', 'laliga', 'Npfl'], 
//         correctAnswer2: 2
//     }
    
// ];





// document.write('quetions.question')

// function showQuestion (q) {
//     let questionE = document.getElementById('question');

//     questionE.textContent = questions.question;
// };

// showQuestion (question);


// let optionsE = document.querySelectorAll('.options');

// optionsE. forEach(function(element, index){
//     element.textContent = questions.options[index] 

//     element.addEventListener('click', function(){
//         if(questions.correctAnswer == index){
//             console.log('correct Answer');
//         }else{
//             console.log('wrong answer');
//         };
        
//     });
// });

// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     console.log('clicked');
// });