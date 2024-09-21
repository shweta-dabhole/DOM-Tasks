const green = document.querySelector(".greenline")

let width_percentage = 0;
const interval = setInterval(()=>{
    width_percentage += 10;
    green.style.width = width_percentage + "%"
    if(width_percentage===100){
        clearInterval(interval);
    }
}, 1000)