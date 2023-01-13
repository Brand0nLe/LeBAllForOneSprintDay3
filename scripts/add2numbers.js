
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add2Return = document.getElementById("add2Return");
let add2SubBtn = document.getElementById("add2SubBtn");


let numInput = "";
let numInput2 = "";
let add2NumbersUrl;



add2SubBtn.addEventListener("click", function () {
AddingApi(numInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            add2Return.textContent = data
            console.log(data)
        }
    )
}

function AddingApi(numInput, numInput2){
    numInput = num1.value
    numInput2 = num2.value
    add2NumbersUrl = "https://allforoneapibrandon.azurewebsites.net/allforone/add2numbers/" + numInput + "/" + numInput2;
    urlCall(add2NumbersUrl)
}