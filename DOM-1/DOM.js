// window
//console.log(this);
//document
//console.log(document);

/* ------------- Accessing the Elements --------------*/
//1. Element by ID:

const home = document.getElementById("home");
console.log(home);

//2. Element by class - mostly not used

const hero = document.getElementsByClassName("hero");
console.log(hero);

//3. Query Selector

const main = document.querySelector(".main");
console.log(main);

//4. QuerySeletorAll

const divide = document.querySelectorAll(".divide");
console.log(divide);

const martin = document.querySelectorAll("h3");
console.log(martin);
