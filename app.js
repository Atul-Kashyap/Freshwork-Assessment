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

app.use(express.static('freshworks'));

app.get('/add/:word/:score?', addWord);

function addWord(request, response){
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if(!score){
        reply = {
            msg : "Score is required."
        }
    } else {
        words[word] = score;
        var data = JSON.stringify(words, null, 2);
        fs.writeFileSync('words.json', data, finished);

        function finished(err){
            console.log('All set.');
        }
        reply = {
            msg : "Thank you for your word."
        }
    }
    response.send(reply);
}

app.get('/all', sendAll);

function sendAll(request, response){
    response.send(words);
}

app.get('/search/:word/', searchWord);
function searchWord(request, response) {
    var word = request.params.word;
    var reply;
    if(words[word]) {
       reply = { 
           status : "found",
            word : word,
            score: words[word]
        }
    } else {
        reply = { 
            status : "not found",
             word : word
         }
    }
    response.send(reply);
}
