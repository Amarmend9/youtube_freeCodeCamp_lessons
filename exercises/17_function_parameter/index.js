const welcomeEl = document.querySelector("#welcome-el")

function greeting(greeting) {
    welcomeEl.textContent = greeting + "Amarmend Zorigoo."
}

greeting("Welcome back, ")

// Multiple parameters
//.                   parameters
    function greetUser(greeting, name, emoji) {
        welcomeEl.textContent =  `${greeting}, ${name} ${emoji}`
    }
//.                   arguments
    greetUser("Welcome back","Amarmend Zorigoo", "🔥")

//  Numbers as functions parameters
    //Create a function, add(), that adds two numbers together and return the sum
        function add(num1, num2) {
            return num1 + num2
        }

        console.log( add(3, 4))
        console.log( add(9, 102))

//  Arguments vs Parameters
    //  What are greeting and name?     -> parameters
    //  What are "Howdy" and "James"?   -> arguments
    //  What are num1 and num2?         -> parameters
    //  What are 3 and 4?               -> arguments

//  Arrays as Parameters
    console.log("Arrays as Parameters")
    //  Create a function, getFirst(arr), that returns the first item in the array
        function getFirst(arr) {
            return arr[0]
        }
        
        //  Call it with an array as an argument to verify that it works
        console.log(getFirst([10, 4, 14]))