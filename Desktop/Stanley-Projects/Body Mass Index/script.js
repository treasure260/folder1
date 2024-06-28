const btnE = document.getElementById("btn");

const heightE = document.getElementById("height");

const weightE = document.getElementById("weight");

const bmiE = document.getElementById("bmi-result");

const weightConditionE = document.getElementById("weight-condition");




function calculateBMI(){
    
    heightValue = heightE.value / 100;

    weightValue = weightE.value;

    bmiE.value = weightValue /   (heightValue*heightValue)

    bmiValue = bmiE.value;

    if (bmiValue < 18.5) {
        weightConditionE.innerText = "Under weight"
    } else if(bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionE.innerText = "Normal weight"
        
    } else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionE.innerText = "Overweight"
        
    } else if(bmiValue >= 30){
        weightConditionE.innerText = "Obesity"

    } 
}


btnE.addEventListener("click", calculateBMI)