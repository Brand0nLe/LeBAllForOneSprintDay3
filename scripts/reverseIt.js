let input1 = document.getElementById("input1");
let reverseItReturn = document.getElementById("reverseItReturn");
let reverseItSubBtn = document.getElementById("reverseItSubBtn");


let savedInput = "";
let reverseItUrl;



reverseItSubBtn.addEventListener("click", function () {
reverseItApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            reverseItReturn.textContent = data
            console.log(data)
        }
    )
}

function reverseItApi(savedInput){
    savedInput = input1.value
    reverseItUrl = "https://allforoneapibrandon.azurewebsites.net/allforone/reverseIt/" + savedInput;
    urlCall(reverseItUrl)
}