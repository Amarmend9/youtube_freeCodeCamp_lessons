// Array - ordered lsits of items 

let featuredPosts = [
    "Check out my my Netflix clone", 
    "Here's the code for my project", 
    "I've just relaunched my portfolio"
]

//  exercise 1 (insert array variable)
    //  Create an array that lists your i.e experience, education, licenses, skills or similar
    //  The items of the array should be strings

    let experience = [
        "I'm a junior developer"
    ]

    let education = [
        "I graduated a software the university."
    ]

    let licenses = [
        "I have a bachelor"
    ]

    let skills = [
        "HTML basic",
        "CSS basic",
        "JavaScript basic"
    ]

//  exercises 2 (count array)
    //  Make the following appear in the console:
    //  "CSS basic"
    console.log(skills[1])
    //  "JavaScript basic"
    console.log(skills[2])
    //  "HTML basic"
    console.log(skills[0])

//  exercises 3 (array.length)
    console.log(featuredPosts.length)   // 3

//  exercises 4 (Array with multiple data types)
    //  Array - ordered list of items - coposite / complex data type

    //  Create an array that describes yourself. Use the three primitive data types you've learned
    //  It should contain your name (string), your age (number), and whether you like pizza (boolean)

    let mySelf = [
        name = "Amarmend",
        age = 23,
        likesPizza = false
    ]

    console.log(mySelf)

// exercises 5 (Adding & removing items from arrays)
    let cards = [7, 4]

    cards.push(6)

    console.log(cards)
    // 5.1 
    //Push the newMessage to the messages array, and then log out the array
    let messages = [
        "Hey, how's it going?",
        "I'm great, thank you! How about you?",
        "All good. Been working on my portfolio lately."
    ]

    let newMessage = "Same here!"

    messages.push(newMessage)

    console.log(messages)

    //  5.2
    //  How can you remove the last item in an  array? Try to google it!

        //  The pop() method removes the last element from an   array and returns that element. This method changes the length of the array.
    messages.pop(newMessage)
    console.log(messages)