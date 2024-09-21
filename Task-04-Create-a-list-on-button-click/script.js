const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.querySelector(".list");

btn.addEventListener("click", function () {
  if (input.value === "") alert("Input is empty");
  else {
    list.innerHTML += `<li> ${input.value}</li></br>`;
    input.value = "";
  }
});