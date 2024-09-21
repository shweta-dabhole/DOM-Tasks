import { images } from "./data.js";

//selecting images div
const people = document.querySelector(".people");
// Selecting the input
const input = document.querySelector("#search");

// for loop in images array

// for (let i = 0; i < images.length; i++) {
//     people.innerHTML += `<div class="shweta">
//     <img src=${images[i].src} height="200px" width="200px"><br/>
//     <h2>${images[i].name}</h2>
//     </div>`
// }

images.forEach((elem) => {
  people.innerHTML += `<div class="shweta">
    <img src=${elem.src} height="200px" width="200px"><br/>
    <h2>${elem.name}</h2>
    </div>`;
});
// console.log(input.value);


input.addEventListener("input", () => {
  let matching = images.filter((elem) => {
    return elem.name.startsWith(input.value);
  });
  let newUsers = "";
  matching.forEach((e) => {
    newUsers += `<div class="shweta">
    <img src=${e.src} height="200px" width="200px"><br/>
    <h2>${e.name}</h2>
    </div>`;
  });
  people.innerHTML = newUsers;
});



