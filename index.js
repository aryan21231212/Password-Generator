let button = document.querySelector("#but")
let screen = document.querySelector("#input")
console.log(screen)

let passlen = 12;

let password = "";

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numeric = "0123456789";
let specialchar = "~!@#$%^&*()_-+=><?/{}[]\|";

button.addEventListener('click',()=>{
    while(password.length <= 12){
        password += uppercase[Math.floor(Math.random()*uppercase.length)]
        password += lowercase[Math.floor(Math.random()*lowercase.length)]
        password += numeric[Math.floor(Math.random()*numeric.length)]
        password += specialchar[Math.floor(Math.random()*specialchar.length)]
    }
    screen.value = password;
    password = "    "
})

function copy(){
    screen.select();
    document.execCommand("copy");
}