const monthNameEl =document.getElementById("month-name");
const dayNameEl =document.getElementById("day-name");
const dayNumberEl =document.getElementById("day-number");
const yearNameEl =document.getElementById("year-name");
const timeEl =document.getElementById("time");

const date = new Date();
console.log(date);
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("en", {
  month: "long"
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long"
})

dayNumberEl.innerText = date.getDate();

yearNameEl.innerText = date.getFullYear();

timeEl.innerText = date.toLocaleTimeString();