const counter = document.querySelector("#counter")
const textarea = document.querySelector(".text")

textarea.addEventListener("input",function(){
    counter.textContent=textarea.value.length})