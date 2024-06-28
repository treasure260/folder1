const containerE = document.querySelector('.container');

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {

  characterIndex++;
  containerE.innerHTML = `
    <h1 class="text">I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if(careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200)
};




// function updateText() {

//   containerE.innerHTML = `
//     <h1 class="text">I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex]}</h1>
//   `;
//   careerIndex++;
//   if(careerIndex === careers.length) {
//     careerIndex = 0;
//   }
//   setTimeout(updateText, 1700)
// }
