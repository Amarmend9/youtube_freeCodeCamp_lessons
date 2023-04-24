//Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100      -> "Not elegible"
// else if exactly 100   -> "Here is your birthdat card from the King!"
// else                  -> "not elegible, you have already gotton one"

if (age < 100){
    console.log("Not elegible")
}

else if (age === 100) {
    // == this equel can "100" true, but === this is a false. This equel is a only can equel string or integer, it is a strongest equel opperator.
    console.log("Here is your birthdat card from the King!")
}

else {
    console.log("not elegible, you have already gotton one") 
}