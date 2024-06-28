const accessKey = ""; 

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputEl.value;
    const url = `https:api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (page === 1) {
        searchResultsEl.innerHTML = ""; 

    }

};

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
    
})