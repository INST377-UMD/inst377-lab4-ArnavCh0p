let isBlue = true;

function alertUser() {
    const name = document.getElementById('name-input').value;
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Please enter your name.");
    }
}

function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;
}

function validateText() {
    const text = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Special characters detected! Please enter valid text.");
    } else {
        alert("Text is valid.");
    }
}

function addText() {
    const heading = document.querySelector("h1");
    heading.textContent += " Add Text";
}
