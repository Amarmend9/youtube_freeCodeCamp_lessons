// Lesson 1 : let & const
console.log("Lesson 1 : let & const")
    //  SETTING THE STAGE
    const player = "Amarmend"
    const opponent = "Nick" // opponent -> Өрсөлдөгч 
    const game = "AmazingFigther"
    let points = 0
    let hasWon = false

    //  PLAYER THE GAME 
    points += 100
    hasWon = true

    //  ANNOUNCING(зарлах) THE WINNER
    if (hasWon) {
        console.log(`${player} got ${points} points and won the ${game} game!`)
    } else {
        console.log(`The winner is ${opponent}! ${player} lost the game`)
    }

    console.log("")

//  Lesson 2 : Log out items in an array
    console.log("Lesson 2 : Log out items in an array")

        let myCourses = ["Learn CSS animations", "UI Design Fundamentals", "Intro to Clean Code"]

    //  Create a function that takes a single parameter, an array,
    //  and logs all the items of the array to the console. 
    //  Call the function while passing in myCourses as an argument

        function logItems(arr) {
            for (i = 0; i < arr.length; i++) {
                console.log(arr[i])
            }
        }

        logItems(myCourses)

    console.log("")
    //  Lesson 3 : Save to localStorage
    console.log("Lesson 3 : Save to localStorage")
    
        let titleEl = document.querySelector("#title-el")
        // localStorage.setItem("Title", "Saving to localStorage")
        titleEl.textContent = (localStorage.getItem("Title"))
        console.log(titleEl)
        
    console.log("")
//  Lesson 4 : addEventListener and object in array
console.log("Lesson 4 : addEventListener and object in array")

    let data = [
        {
            player : "Jane",
            score: 52
        },
        {
            player: "Mark",
            score: 41
        }
    ]
    //  Fetch the button from the DOM, store it a variable
        const janeBtn = document.querySelector("#jane-btn")
    //  Use addEventListener() to listen for button clicks
        janeBtn.addEventListener("click", function() {
            //  Log Jane's score when the button is clicked (via data)
            console.log(`Lesson 4 : addEventListener and object in array result: ${data[0].score} `)
        })
        
        console.log("")
//  Lesson 5 : Generate sentence
console.log("Lesson 5 : Generate sentence")

    //  The generateSentence(desc, arr) takes two parameterer: a description and an array.
    //  It should return a string based upon the description and array.

    //  Example 1: if you pass in "largest countries", and ["China", "India", "USA"],
    //  it should return the string: "The 3 largest countries are China, India, USA"  
    
    //  Example 2: If you pass in "best friuts" and ["Apples", "Bananas"], it should return: 
    //  "The 2 best friuts are Apples, Bananas"
    
    
    //  Use both a for loop and a template string to solve the challenge
        console.log("My solution")
        //  My solution
        const countries = ["China", "India", "USA"]
        let description = "largest countries"
        function generateSentence(desc, arr) {
            for(let i = 0; i < desc.length; i++) {
                i =+ desc[i]
                for(let j = 0; j<arr.length; j++) {
                    j=+ arr[j]
                }
            }
            console.log(`The ${arr.length} ${description} are ${arr}`)
        }
        
        generateSentence(description, countries)
        
        const friuts = ["Apples", "Bananas"]
        description = "best friuts"
        generateSentence(description, friuts)
        
        console.log("")
        console.log("Per solution")
        //  Per solution
        function generateSentencePer(desc, arr) {
            let baseString = `The ${arr.length} ${desc} are `
            const lastIndex = arr.length - 1
            for (i = 0; i < arr.length; i++) {
                if( i === lastIndex ) {
                    baseString += arr[i]
                } else {
                    baseString += arr[i] + ", "
                }
            }
            return baseString
        }

        const sentence = generateSentencePer("highest mountains", ["Mount Everest", "K2"])
        console.log(sentence)

console.log("")
console.log("Lesson 6: Render images")
//  Lesson 6: Render images
    
    //  Create a function that renders the three team images
    //  Use a for loop, template strigs (``), plus equals (+=)
    //  .innerHTML to solve the challenge.

    const imgs = [
        "img/img1.jpg",
        "img/img2.jpg",
        "img/img3.jpg"
    ]

    let container = document.querySelector("#container")
    
    function rendersImages() {
        let imgDOM = ""
        for(let count = 0; count<imgs.length; count++) {
            imgDOM += `<img alt="Player in the team" src="${imgs[count]}" class="team-img">`
        }
        container.innerHTML = imgDOM
        console.log(imgDOM)
    }

    rendersImages()
