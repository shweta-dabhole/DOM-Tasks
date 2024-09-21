const fname = document.querySelector(".fname")
const lname = document.querySelector(".lname")
const button = document.querySelector(".btn")

button.addEventListener('click', function(e){
    e.preventDefault()
    if(fname.value==="" || lname.value===""){
        alert('input is empty')
    }else{
        alert("input form submitted successfully")
    }
})
