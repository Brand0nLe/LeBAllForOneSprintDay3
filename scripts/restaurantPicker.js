let foodInput = document.getElementById("foodInput");
let foodReturn = document.getElementById("foodReturn");
let foodSubBtn = document.getElementById("foodSubBtn");
//console.log(nameInput, helloReturn, helloSubBtn)

let savedInput = "";
let restaurantPickerUrl = "";



foodSubBtn.addEventListener("click", function () {
foodApi(savedInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            foodReturn.textContent = data
            console.log(data)
        }
    )
}

function foodApi(savedInput){
        savedInput = foodInput.value
        restaurantPickerUrl = "https://allforoneapibrandon.azurewebsites.net/allforone/restaurantPicker/" + savedInput
        urlCall(restaurantPickerUrl)
}