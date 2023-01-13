let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let askingReturn = document.getElementById("askingReturn");
let askingSubBtn = document.getElementById("askingSubBtn");
//console.log(nameInput, helloReturn, helloSubBtn)

let savedInput = "";
let savedInput2 = "";
let askingQuestionsUrl;



askingSubBtn.addEventListener("click", function () {
askingApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            askingReturn.textContent = data
            console.log(data)
        }
    )
}

function askingApi(savedInput, savedInput2){
    savedInput = nameInput.value
    savedInput2 = ageInput.value
    askingQuestionsUrl = "https://allforonenewapi.azurewebsites.net/allforone/askingQuestions/" + savedInput + "/" + savedInput2;
    urlCall(askingQuestionsUrl)
}