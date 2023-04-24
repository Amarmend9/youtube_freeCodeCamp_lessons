//  Exercise 1 
    //  Count to ten!

    //  We need to specify...

    //  Where should we STRAT counting
    //  Where is the FINISH line?
    //  What's the STEP SIZE we should use?

    //      START       FINISH      STEP SIZE   
    for(let count = 10; count < 21; count +=1){
        console.log(count)
    }

    console.log("Exercise 1")
    console.log("")
    
//  Exercise 2
    //  Create a for loop thta counts from 10 to 100 in steps of 10 
    //  Use console.log to log out the numbers 
    for(let i = 10; i<=100; i+=10 ){
        console.log(i)
    }
    
    console.log("Exercises 2")
    console.log("")

//  Exercise 3 (For loops & arrays)
    let message = [
        "He, how's it going?",
        "I'm great, thank you! How about you?",
        "All good. Been working on my portfolio lately.",
        "Same here!"
    ]

    for(i = 0; i < 4; i += 1) {
        console.log(message[i])
    }
    
    console.log("Exercises 3")
    console.log("")
    //  3.1 (First array-based for loop)
        let cards = [7, 3, 9]

        //  Create a for loop that logs out all the cards in the array
        //  Use cards.length to specify how long the loop should run

        for(i = 0; i < cards.length; i++) {
        console.log(cards[i])
        }

        console.log("Exercises 3.1")
        console.log("")
    

// Exercise 4 (For loops, array & DOM(Document object modul))   
    let sentence = ["Hello", "my", "name", "is", "Amaraa"]
    let greetingEl = document.querySelector("#greeting-el")

    //  Render the sentence in the greetingEl paragraph using a for loop and .textContent

    //  How to you keep the spaces between the words if i remve them from the array? 
    
    for(i = 0; i < sentence.length; i++) {
        greetingEl.textContent += sentence[i] + " "
        console.log(sentence[i])
    }

    console.log("Exercises 4")
    console.log("")

    
    