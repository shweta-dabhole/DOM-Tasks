let hello = document.querySelector(".hello")
let world = document.querySelector(".world")

hello.addEventListener("mouseenter", function(){
    world.style.display="block"
})
hello.addEventListener("mouseleave", function () {
  world.style.display = "none";
});