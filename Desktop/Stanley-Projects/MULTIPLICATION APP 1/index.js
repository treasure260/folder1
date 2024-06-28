const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAnswer = num1*num2
console.log(correctAnswer, typeof correctAnswer);
const questionEl = document. getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`
const inputEl = document.getElementById("input"); 
const scoreEl = document.getElementById ("score");
const formEl = document.getElementById("form");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
scoreEl.innerText = `score:${score}`;
// formEl.addEventListener("submit", ()=>{
//     const userAnswer = +inputEl.value
//     console.log(userAnswer, typeof userAnswer);
//     if (userAnswer===correctAnswer) {
//         score++
//         console.log(score);
//         updateLocalStorage();
//     } else {
//         score--
//         console.log(score);
//         updateLocalStorage();
//     }
// });

// function updateLocalStorage() {
//     localStorage.setItem("score", JSON.stringify(score));
// }

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(submitted);
})