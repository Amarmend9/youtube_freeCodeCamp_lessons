// Exercises 1 (simply Math.random() )
    let randomNumber = Math.random()

    console.log("Math.random()")
    console.log(randomNumber)
    
    /*
    
    What does Math.random() do?
    
    Your answer: It generates a random number between 0 and 1 (not inclusive of 1)
    
    */
   
// Exercises 2 ( Math.random() * number )
    randomNumber = Math.random() * 6
    console.log("Math.random() * 6")
    console.log(randomNumber)
    /*
    In which range will our randomNumber be now?|
        
        From:   0
        To:     5.999

    */

// Exercise 3 ( Math.floor(number) )
    let flooredNumber = Math.floor(3.45632)
    console.log("Math.floor(3.45632)")
    console.log(flooredNumber)

    /* 
    
    What does Math.floor() do to positive numbers?

    Your answer: It is remove decimals(Аравтын бутархай)

    */

// Exercise 4 (Create dice)

    randomNumber = Math.floor(Math.random() * 6)

    console.log("Math.floor(Math.random() * 6")
    console.log(randomNumber)

    /*

    Write down all the possible values randomNumber can hold now!

    Result: 0 | 1 | 2 | 3 | 4 | 5

    */

    
    // Try to modify the expression so that we get a range from 1 to 6

    console.log("Math.floor(Math.random()*6)+1") 
    
    function rollDice() {
        randomNumber = Math.floor(Math.random() * 6) + 1
        return randomNumber
    }
    
    console.log(randomNumber)
    

    