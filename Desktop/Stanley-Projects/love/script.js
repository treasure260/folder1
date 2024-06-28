const number = Math.floor(Math.random()*10+1)
console.log(number);
const resultEl = document.getElementById("result");
const wrapper = document.getElementById("wrapper");
const wrapper1El =  document.getElementById("wrapper-1");
const wrapper2El =  document.getElementById("wrapper-2");
const inputMaleEl = document.getElementById("input-male");
const inputFemaleEl = document.getElementById("input-female");
const buttonMatchEl = document.getElementById("button-match");
const buttonRematchEl = document.getElementById("button-re-match");

let result = localStorage.getItem("result");

if(!result) {
    result = "";
}

resultEl.innerText = `Result:${result}`

function updateLocalStorage() {
    localStorage.setItem("result");
}

buttonMatchEl.addEventListener("match", ()=>{
    if (number > 7) {
        result = "you guys are perfect match"
        updateLocalStorage();
    }else{
        result = "not a good match"
        updateLocalStorage();
    }

});


// formEl.addEventListener("submit", () => {
//     const userAnswer = +inputEl.value
//     console.log(userAnswer, typeof userAnswer);

//     if (userAnswer === correctAnswer) {
//         result++
//         updateLocalStorage();
//     }else{
//         result--
//         updateLocalStorage();
//     }


// })

