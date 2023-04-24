const credits = 1

if (credits) {
    console.log("Let's play lottery")
} else {
    console.log("Sorry, you have no credits")
}  

// truthy
// falsy

/* false
    //  0
    //  ""
    //  null        -> How you as a developer signalize emptiness
    //  undefined   -> how JavaScript signalizes emptiness
    //  Nan
*/

let currentViewers = null

currentViewers = ["jane", "nick"]

if (currentViewers) {
    //do something, e.g. notify the live streamers
    console.log("we have viewers")
}

console.log("")

console.log("Exercise 1")
    let trueOfFalseBoolean = ("Hello")

    console.log(trueOfFalseBoolean)

console.log("")

console.log("Exercise 2")
    console.log(Boolean(""))    //  false
    console.log(Boolean("0"))   //  true
    console.log(Boolean(100))   //  true
    console.log(Boolean(null))  //  false
    console.log(Boolean([0]))   //  true
    console.log(Boolean(-0))    //  false
