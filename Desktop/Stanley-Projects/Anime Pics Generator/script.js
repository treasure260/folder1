const btnE = document.getElementById("btn");
const animeContainerE = document.querySelector(".anime-container");
const animeImgE = document.querySelector(".anime-img");
const animeNameE = document.querySelector(".anime-name");



btnE.addEventListener("click", async function(){
    try {
        btnE.disabled = true;
        btnE.innerText = "Loading......"
        animeNameE.innerText = "Updating....."
        animeImgE.src = "spinning.svg"
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        animeContainerE.style.display = "block";
        btnE.disabled = false;
        btnE.innerText = "GET ANIME"
        animeImgE.src = data.url
        animeNameE.innerHTML = data.artist
    } 
        catch (error) {
        btnE.disabled = false;
        btnE.innerText = "GET ANIME"
        animeNameE.innerText = "An error happened, please try again later"
    }
    

});