const head=document.querySelector('.head')
const button= document.querySelector('.btn')

head.style.color="pink"
button.style.backgroundColor="red"

button.addEventListener('click', function(){
    button.style.backgroundColor="pink"
    button.style.color='magenta'
})