//setting up the race
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
    let totalLaptime = lap1 + lap2 +lap3
    console.log(totalLaptime)
}

logLapTime()


countdown()
countdown()
//GO!
//Players are running the race
//Race is finished!

//Get ready for a new race

let username = "Amarmend"

let message = "You have three new notifications";

console.log(message + ", " + username + "!");

let messageToUser = message + ", " + username + "!";

console.log(messageToUser)

let name = "Amarmend"
let greeting = "Welcome back "

let myGreeting = greeting + name
console.log(myGreeting)

let welcomeEl = document.getElementById("welcome-el")
welcomeEl.innerText = myGreeting

welcomeEl.innerText += " 👋"
