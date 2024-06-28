const btnE = document.getElementById("btn");
// const emojiName = document.getElementsByClassName(".emoji-name");
const displayContainer = document.getElementById("display-container");
const displayName = document.getElementById("display-name");

const displayCode = document.getElementById("display-code");

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=41d93edca34e0de7f22df0a8ce34c06018cc5c0f");

    data = await response.json();

    for (let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
};

getEmoji()

btnE.addEventListener("click", ()=>{
   const randomNumber = Math.floor(Math.random()*emoji.length) 
   console.log(randomNumber);
   displayName.innerText = "EMOJI IMAGE:" + " " + data[randomNumber].character
   displayContainer.style.display = "block";
   displayCode.innerText = "EMOJI NAME:" + " " + data[randomNumber].unicodeName

});
