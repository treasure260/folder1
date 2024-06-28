let questions = [
    {prompt: 'What does gato mean in spanish?\n(a) dog\n\ (b) cat\n(c) rat\n(d) bird',
    correctAnswer: 'b'},
    {prompt: 'What is the capital of Delta State?\n(a) abuja\n\ (b) asaba\n(c) imo\n(d) owere',
    correctAnswer: 'b'},
    {prompt: 'Who scored the winner goal in this year champions league?\n(a) ronaldo\n\ (b) messi\n(c) benzema\n(d) greelish',
    correctAnswer: 'd'},
    {prompt: 'What is the name of mancity coach?\n(a) zidane\n\ (b) pochetino\n(c) guadiola\n(d) conte',
    correctAnswer: 'c'},
    
];

let questionsE = document.getElementById('prompt');
let scoreE = document.getElementById('score');

let score = 0;

for(let i = 0; i < questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].correctAnswer){
        score++
        alert('CORRECT!')

    } else{
        alert('WRONG!')
    }
}
alert(' you got ' + score +  ' / '  + questions.length + ',' +  ' This is super cool! ');
