const btnE = document.getElementById("btn");

const quoteE = document.getElementById("quote");

const authorE = document.getElementById("author");


const apiURL = "http://api.quotable.io/random";



async function getQuote(){

    try {
        btnE.innerHTML = "Loading....."
        btnE.disabled = true

        quoteE.innerText = "Updating....."
        authorE.innerText = "Updating....."


        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const authorContent = data.author;
        quoteE.innerText = quoteContent;
        authorE.innerText = " Author Name " + " ~ " + authorContent;
        btnE.innerHTML = "GET QUOTE"
        btnE.disabled = false
    } catch (error) {
        quoteE.innerHTML = "An ERROR happened, try again later"
        authorE.innerHTML = "An ERROR happened, try again later"
        btnE.innerHTML = "GET QUOTE"
        btnE.disabled = false
    }
}

getQuote();



btnE.addEventListener("click", getQuote);