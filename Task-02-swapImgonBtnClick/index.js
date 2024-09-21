const image1=document.querySelector(".img1")
const image2 = document.querySelector(".img2")
const swap = document.querySelector(".btn")

swap.addEventListener('click', function(){
    let img1 = image1.src
    let img2 = image2.src

    image1.src=img2
    image2.src=img1
})