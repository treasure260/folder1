const selectFirst = document.getElementById("currency-first");
const selectSecond = document.getElementById("currency-second");z
const inputFirst = document.getElementById("worth-first");
const inputSecond = document.getElementById("worth-second");
const paragraph = document.getElementById("exchange-rate");



updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/37e822e6497c17e16703f2a5/latest/${selectFirst.value}`)
    .then((response) => response.json())
    .then((data) => {
        const rate = data.conversion_rates[selectSecond.value];

        paragraph.innerText = `1 ${selectFirst.value} = ${rate + " " + selectSecond.value}`;

        inputSecond.value = (inputFirst.value * rate).toFixed(2);
    });  
}



selectFirst.addEventListener("change", updateRate);
selectSecond.addEventListener("change", updateRate);
inputFirst.addEventListener("change", updateRate);
