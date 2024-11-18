const displayResult = document.getElementById("displayResult");

function appendChildToDisplayResult(input) {
    displayResult.value += input;
}

function clearDisplayContent() {
    displayResult.value = "";
}

function getResult() {
    try {
        displayResult.value = eval(displayResult.value);
    } catch (error) {
        displayResult.value = "Try again after deleting"
    }
}
