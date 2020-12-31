var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);

console.log('server is starting');

var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log("listening.........")
}
document.querySelector('.create').addEventListener('submit', (event) => {
     event.preventDefault();
     const word = (event.target.username.value);
     const val = (event.target.emailId.value);
     const item = {word, val};
    localStorage.setItem(word, JSON.stringify(item))
     document.querySelector(".createMessage").textContent = "New Employee Email Id Added!";
     document.querySelector(".newCreateMessage").textContent = "Thank You!";
});

document.querySelector('.read').addEventListener('submit', (event) => {
    event.preventDefault();
    const val1 = (event.target.name.value);
    document.querySelector('.message').textContent = val1;
});
document.querySelector('.update').addEventListener('submit', (event) => {
    event.preventDefault();
    const word = (event.target.username.value);
    const val = (event.target.emailId.value);
    const item = {word, val};
    localStorage.setItem(word, JSON.stringify(item))
    document.querySelector(".updateMessage").textContent = "New Email Updated!";
    document.querySelector(".newupdateMessage").textContent = "Thank You!";
});