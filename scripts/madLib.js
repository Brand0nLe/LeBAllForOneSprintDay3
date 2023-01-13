let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let yummyFlavor = document.getElementById("yummyFlavor");
let nastyFlavor = document.getElementById("nastyFlavor");
let num1 = document.getElementById("num1");
let animal = document.getElementById("animal");
let color = document.getElementById("color");
let num2 = document.getElementById("num2");
let emotion = document.getElementById("emotion");
let num3 = document.getElementById("num3");

let madLibReturn = document.getElementById("madLibReturn");
let madLibSubBtn = document.getElementById("madLibSubBtn");

let savedInput = "";
let savedInput2 = "";
let savedInput3 = "";
let savedInput4 = "";
let savedInput5 = "";
let savedInput6 = "";
let savedInput7 = "";
let savedInput8 = "";
let savedInput9 = "";
let savedInput10 = "";

let madLibUrl;



madLibSubBtn.addEventListener("click", function () {
madLibApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            madLibReturn.textContent = data
            console.log(data)
        }
    )
}

function madLibApi(savedInput, savedInput2, savedInput3, savedInput4, savedInput5, savedInput6, savedInput7, savedInput8, savedInput9, savedInput10,){
    savedInput = name1.value
    savedInput2 = name2.value
    savedInput3 = yummyFlavor.value
    savedInput4 = nastyFlavor.value
    savedInput5 = num1.value
    savedInput6 = animal.value
    savedInput7 = color.value
    savedInput8 = num2.value
    savedInput9 = emotion.value
    savedInput10 = num3.value
    madLibUrl = "https://allforonenewapi.azurewebsites.net/allforone/madlib/" + savedInput + "/" + savedInput2 + "/" + savedInput3 + "/" + savedInput4  + "/" + savedInput5  + "/" + savedInput6  + "/" + savedInput7  + "/" + savedInput8  + "/" + savedInput9  + "/" + savedInput10;
    urlCall(madLibUrl)
}