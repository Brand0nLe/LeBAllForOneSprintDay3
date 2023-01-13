let userInput = document.getElementById("userInput");

let getFirstName = document.getElementById("getFirstName");
let getLastName = document.getElementById("getLastName");
let getSlackName = document.getElementById("getSlackName");
let getEmail = document.getElementById("getEmail");
let getHobbies = document.getElementById("getHobbies");

let directoryReturn = document.getElementById("directoryReturn");
let directorySubBtn = document.getElementById("directorySubBtn");
//console.log(nameInput, helloReturn, helloSubBtn)

let savedInput = "";
let studentDirectoryUrl;



directorySubBtn.addEventListener("click", function () {
studentDirectoryApi(userInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            getFirstName.textContent = "First Name: " + data.firstName;
            getLastName.textContent = "Last Name: " + data.lastName;
            getSlackName.textContent = "Slack Name: " + data.slackName;
            getEmail.textContent = "Email: " + data.email;
            getHobbies.textContent = "Hobbies: " + data.hobbies;
            console.log(data.firstName, data.lastName, data.slackName, data.email, data.hobbies);
        }
    )
}

function studentDirectoryApi(userInput){
    if (userInput.value){
    savedInput = userInput.value
    studentDirectoryUrl = "https://allforonenewapi.azurewebsites.net/allforone/getstudentby/" + savedInput;
    urlCall(studentDirectoryUrl);
    }else{
        directoryReturn.textContent = "Enter a valid response";
    }
}