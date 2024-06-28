const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");



for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = (buttonsEl[i].textContent); 
        if(buttonValue === "c"){
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();
        }else if(buttonValue === "del"){
            deleteResult();
        }else {
            appendValue(buttonValue);
        }
    })
}

function clearResult(){
    inputFieldEl.value = "";
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function deleteResult(){
    let currentValue = inputFieldEl.value;

        newValue = currentValue.slice(0, -1);

        inputFieldEl.value = newValue;




}

function appendValue(buttonValue){
    // inputFieldEl.value +=  buttonValue
    inputFieldEl.value = inputFieldEl.value + buttonValue
    
}