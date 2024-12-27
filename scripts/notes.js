import { baseurl } from "./baseurl.js";

window.onload = function () {
    getNotes();
}

let form = document.getElementById("form");
form.addEventListener("submit", function () {
    event.preventDefault();
    let title = form.title.value;
    let body = form.body.value;
    alert("Do you want to save your notes?");
    let notesObj = { title, body };
    fetch(`${baseurl}/notes`, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(notesObj),
    })
        .then(() => {
            alert("Successfully created notes");
        }).catch(err => {
            alert("Error creating notes try again later");
        })
})


function getNotes() {
    fetch(`${baseurl}/notes`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            displayNotes(data);
        }).catch((err) => {
            console.log(err);
        })
}

function displayNotes(notes) {
    let notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = "";
    notes.map((ele, i) => {
        let card = document.createElement('div');
        let title = document.createElement("h3");
        title.textContent = ele.title;
        let body = document.createElement("p");
        body.textContent = ele.body;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            event.preventDefault();
            deleteNotes(ele);
        })
        card.append(title, body, deleteButton);
        notesContainer.append(card);
    })
}

function deleteNotes(ele) {
    fetch(`${baseurl}/notes/${ele.id}`, {
        method: 'DELETE',
    }).then(function () {
        alert('Deleted Notes');
        getNotes();
    })
}