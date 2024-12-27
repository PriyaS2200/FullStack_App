import { baseurl } from "./baseurl.js";

let form = document.getElementById("login-content");
form.addEventListener("submit",function(){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    fetch(`${baseurl}/users`)
    .then((response)=>response.json())
    .then((data)=>{
        let user = data.filter((ele,i)=>ele.email == email)
        if(user.length != 0){
            if(user[0].password == password){
                localStorage.setItem("user",JSON.stringify(user[0]));
                window.location.href = "notes.html";
            }else{
                alert("Please enter a valid password");
            }
        }else{
            alert("Please signup before login");
            window.location.href = "signup.html";
        }
    })
})