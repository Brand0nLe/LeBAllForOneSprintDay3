let userInput = document.getElementById("userInput");

let getFirstName = document.getElementById("firstName");
let getLastName = document.getElementById("lastName");
let getSlackName = document.getElementById("slackName");
let getEmail = document.getElementById("email");
let getHobbies = document.getElementById("hobbies");

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
    studentDirectoryUrl = "https://allforoneapibrandon.azurewebsites.net/allforone/getstudentby/" + savedInput;
    urlCall(studentDirectoryUrl);
    }else{
        directoryReturn.textContent = "Enter a valid response";
    }
}