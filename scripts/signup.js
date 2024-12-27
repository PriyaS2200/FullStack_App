import { baseurl } from "./baseurl.js";

let form = document.getElementById("signup-content");
form.addEventListener("submit",function(){
    event.preventDefault();
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let userObj = {name, email , password};
    fetch(`${baseurl}/users`)
    .then((response) => response.json())
    .then((data) => {
        let user = data.filter((element,i) => element.email == email);
        if(user.length != 0){
            alert("User already exists!");
            window.location.href = "login.html";
        }else{
            fetch(`${baseurl}/users`,
            {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userObj),
            }).then(() => {
                alert("Signup successful!");
                window.location.href = "login.html";
            }).catch((error) => {
                alert("Something went wrong, please try again later");
                console.log(error);
            })
        }
    })
})