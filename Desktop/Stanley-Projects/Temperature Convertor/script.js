const celsiusTemp = document.getElementById("temp-celsius");
const fahrenheitTemp = document.getElementById("temp-fahrenheit");
const kelvinTemp = document.getElementById("temp-kelvin");




function computeTemp(event){
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "Fahrenheit":
            kelvinTemp.value = ((currentValue - 32) * 1.8 + 273).toFixed(2)
            celsiusTemp.value = ((currentValue - 32) * 1.8).toFixed(2)
            break;
        case "celsius":
            fahrenheitTemp.value = (currentValue * 1.8 + 32).toFixed(2)
            kelvinTemp.value = (currentValue + 273.15).toFixed(2)
            break;
        
        case "Kelvin":
            fahrenheitTemp.value = ((currentValue - 273) * 1.8 + 32).toFixed(2)
            celsiusTemp.value = (currentValue - 273).toFixed(2)
            break;
    
        default:
            break;
    }
}