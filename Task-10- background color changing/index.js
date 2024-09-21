const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let rbgColor = "" ;
let Interval;
start.addEventListener("click", () => {
  Interval = setInterval(function () {
    let value1 = Math.floor(Math.random() * 256);
    let value2 = Math.floor(Math.random() * 256);
    let value3 = Math.floor(Math.random() * 256);
    rbgColor = "rgb(" + value1 + "," + value2 + "," + value3 + ")";
    console.log(rbgColor);
    document.body.style.backgroundColor = rbgColor;
  }, 1000);
});

stop.addEventListener('click', ()=>{
  clearInterval(Interval)
  stop.textContent = rbgColor
})