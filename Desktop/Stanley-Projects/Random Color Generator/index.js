const containerE = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerE = document.createElement("div");
  colorContainerE.classList.add("color-container");
  containerE.appendChild(colorContainerE)
};

const colorContainerEs = document.querySelectorAll(".color-container");
console.log(colorContainerEs);

generateColors();

function generateColors() {
  colorContainerEs.forEach((colorContainerE)=>{
    const newColorCode = randomColor();
    console.log(newColorCode);
    colorContainerE.style.backgroundColor = "#" + newColorCode;
    colorContainerE.innerText = "#" + newColorCode
  });
}



randomColor();
function randomColor(){
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;

  let colorCode = "";

  for (let index = 0; index < colorCodeLength; index++) {
    const ramdomNumber = Math.floor(Math.random() * chars.length);
    console.log(ramdomNumber); 
    colorCode += chars.substring(ramdomNumber, ramdomNumber + 1);
    console.log(colorCode);
  }
  return colorCode;
};

// const containerE = document.querySelector(".container");
// createElement();
// function createElement() {
//   for (let index = 0; index < 1; index++) {
//     const container1E = document.createElement("div");
//     container1E.classList.add("container-1")
//     containerE.appendChild(container1E);
//     container1E.style.backgroundColor = "red";
//     console.log(container1E);
//     const container2E = document.createElement("div");  
//     container2E.classList.add("container-2")  
//     containerE.appendChild(container2E)
//     if(index === 1) {
//       index = 0;
//     } 
//     // setTimeout(createElement, 1500) 
//   }
// }



