let num1 = document.getElementById("num1");
let oddOrEvenReturn = document.getElementById("oddOrEvenReturn");
let oddOrEvenSubBtn = document.getElementById("oddOrEvenSubBtn");


let savedInput = "";
let oddOrEvenUrl;



oddOrEvenSubBtn.addEventListener("click", function () {
oddOrEvenApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            oddOrEvenReturn.textContent = data
            console.log(data)
        }
    )
}

function oddOrEvenApi(savedInput){
    savedInput = num1.value
    oddOrEvenUrl = "https://allforoneapibrandon.azurewebsites.net/allforone/oddoreven/" + savedInput;
    urlCall(oddOrEvenUrl)
}