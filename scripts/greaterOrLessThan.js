let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let greaterLessReturn = document.getElementById("greaterLessReturn");
let greaterLessSubBtn = document.getElementById("greaterLessSubBtn");


let savedInput = "";
let savedInput2 = "";
let greaterLessThanUrl;



greaterLessSubBtn.addEventListener("click", function () {
greaterLessApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            greaterLessReturn.textContent = data
            console.log(data)
        }
    )
}

function greaterLessApi(savedInput, savedInput2){
    savedInput = num1.value
    savedInput2 = num2.value
    greaterLessThanUrl = "https://allforoneapibrandon.azurewebsites.net/allforone/greaterorlessthan/" + savedInput + "/" + savedInput2;
    urlCall(greaterLessThanUrl)
}