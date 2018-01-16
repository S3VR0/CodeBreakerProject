let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value || attempt.value == ""){
        setHiddenFields();
    }
    if (validateInput(input.value) == false) {
        return false;
    } else {
        attempt ++;
    }
    var outputResult = getResults(input.value);
    if (outputResult == true) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else if (outputResult == false && attempt >= 10) {
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    } else {
        setMessage("Incorrect, try again.");
    }
}

function setHiddenFields() {
    answer = Math.floor(Math.random() * 10000);
    answer = answer.toString();
    attempt = 0;
    while (answer.length < 4) {
        answer = "0" + answer;
    }  
    return answer;
}
function setMessage(a) {
    message = document.getElementById("message");
    message.innerHTML = a;
    return message;
}
function validateInput(b) {
    if (b.length != 4) {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    } else {
        return true;
    }
}
function getResults(userInput) {
    userInput = userInput.toString();
    results = document.getElementById("results");
    var correctNum = 0;
    var resultNum = '<div class="row">' + '<span class="col-md-6">' + userInput + '</span>';
    var resultDiv = '<div class="col-md-6">';
    for (var charCount = 0; charCount < userInput.length; charCount ++) {
     if (userInput.charAt(charCount) == answer.charAt(charCount)) {
         resultDiv += '<span class="glyphicon glyphicon-ok">' + '</span>';
         correctNum ++;
     } else if (userInput.charAt(charCount) == answer.charAt(0) || userInput.charAt(charCount) == answer.charAt(1) || userInput.charAt(charCount) == answer.charAt(2) || userInput.charAt(charCount) == answer.charAt(3)) {
         resultDiv += '<span class="glyphicon glyphicon-transfer">' + '</span>';
     } else {
         resultDiv += '<span class="glyphicon glyphicon-remove">' + '</span>' ;
    }
  }
    results.innerHTML += resultNum + resultDiv + '</div>';
    if (correctNum == answer.length) {
        return true;
    } else {
        return false;
    }
}
function showAnswer(d) {
    answerResult = document.getElementById("code");
    if (d == true) {
        answerResult.innerHTML = answer;
        document.getElementById("code").className += " success ";
    } else if (d == false) {
        answerResult.innerHTML = answer;
        document.getElementById("code").className += " failure ";
    }
}
function showReplay() {
    document.getElementById("guessing-div").style.display = "none";
    document.getElementById("replay-div").style.display = "block";
}
























