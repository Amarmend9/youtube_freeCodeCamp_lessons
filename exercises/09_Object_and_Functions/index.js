console.log("Exercise 1")
console.log("Object and Function")
console.log("")

    //  Create a person object that contains three keys: name, age and country.
    //  Use yourself as an example to set the values for name, age and country

    //  Create a function, logData(), rhat uses the person object to create a 
    //  string in the following format:
    //  "Amaraa is 23 years old and lives in Mongolia"

    //   Call the logData() function to verify that it works

    let person = {
        name: "Amarmend",
        age: 23,
        country: "Mongolia"
    }

    function logData() {
        console.log(person.name + " is " + person.age + " years old and lives in " + person.country )
    }

    logData()


console.log("")
console.log("Exercise 2")
console.log("if else")
console.log("")

let age = 67
//  less than 6 years old -> free
//  6 to 17 years old     -> child discount
    //  18 to 26 years old    -> student discount
    //  27 to 66 years old    -> full price
    //  over 66 years old     -> senior citizen discount
    
    //  Create a conditional statement (if/else/else if) that logs out the discount
    //  the passenger will geyt based upon the value of the age variable 
    if (age < 6) {
        console.log("free")
    } else if (age < 18) {
        console.log("child discount")
    } else if (age < 27) {
        console.log("student discount")
    } else if (age < 67) {
        console.log("full price")
    } else {
        console.log("senior citizen discount")
    }

console.log("")
console.log("Exercise 3")
console.log("Loops and Arrays")
console.log("")

    let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

    /* Use a for loop to log the following to the console:
    
    The 5 Largest countries in the world:
    - China 
    - India
    - United States
    - Indinesia
    - Pakistan
    */

   console.log("The 5 Largest countries in the world:")

    for(let i=0; i < largeCountries.length; i++) {
        console.log("- " + largeCountries[i])
    }
    
console.log("")
console.log("Exercise 4")
console.log("push, pop, unshift, shift callenge")
console.log("")

    largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
    
    //  You need to help me fixup the largeCountries array so that
    //  China and Pakistan are added back into their respective places
    
    //  Use push() & pop() and their counterparts unshift() & shift()
    //  Google how to use unshift() and shift()
        //  The shift() method in JavaScript removes an item from the beginning of an array and shifts every other item to the previous index, whereas the unshift() method adds an item to the beginning of an array while shifting every other item to the next index.
    largeCountries.shift()
    largeCountries.unshift("China")
    largeCountries.pop()
    largeCountries.push("Pakistan")
    console.log(largeCountries)

console.log("")
console.log("Exercise 5")
console.log("Logical Operators")
console.log("")

let dayOfMonth = 14
    let weekday = "Friday"
    
    //  If it is Friday the 13th, log out this spooky face: 😨
    //  Use the logical "AND operator" -> &&
    if (dayOfMonth === 13 && weekday === "Friday") {
        console.log("😨")
    } else {
        console.log("😊")
    }

console.log("")
console.log("Exercise 6")
console.log("Rock papers scissors")
console.log("")

    let hands = ["rock", "paper", "scissor"]
    let randomItem 
    //  Create a function that returns a random item from the array
    function getHand() {
        // return randomItem = hands[Math.floor(Math.random()*hands.length)]
        let randomIndex = Math.floor( Math.random() * 3)
        return hands[randomIndex]
    }
    console.log(getHand())

console.log("")
console.log("Exercise 7")
console.log("Sorting fruits")
console.log("")

    let fruits = ["apple", "orange", "apple", "apple", "orange"]
    let appleShelf = document.querySelector(".friut.apple-shelf")
    let orangeShelf = document.querySelector(".friut.orange-shelf")

    console.log(fruits)

    //  Create a function that puts the apples onto the appleShelf
    //  and the orange onto the orangeShelf. Use a for loop,
    //  a conditional statement, and the textContent property.
    function sortFriut() {
        for (let i = 0; i < fruits.length; i++) {
            if(fruits[i] === "apple") {
                appleShelf.textContent += fruits[i] + " " 
            } else if(fruits[i] === "orange") {
                orangeShelf.textContent += fruits[i] + " "
            }
        }
    }

    sortFriut()