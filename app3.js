let youremail = document.getElementById("email");
// console.log('email')
let yourpassword = document.getElementById("password");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let button = document.getElementById("button")
let form = document.getElementById("login");

form.addEventListener('submit',(e) => {
    if(youremail.value === 'samoeurnart6@gmail.com' && yourpassword.value === '882003' && firstname.value === 'Art' && lastname.value === 'Samoeurn' ){
        alert("Card ID : 0978653323");
    } else if(youremail.value != 'samoeurnart6@gmail.com' && yourpassword.value != '882003' && firstname.value != 'Art' && lastname.value != 'Samoeurn'){
        alert("Try again");
    }
})