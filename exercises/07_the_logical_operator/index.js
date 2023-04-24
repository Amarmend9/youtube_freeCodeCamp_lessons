// Logical AND operator
    let hasCompletedCourse = true
    let giveCertificate = true
    
    console.log("Logic AND operator")
    if(hasCompletedCourse === true && giveCertificate === true) {
        generateCertificate()
    }
    
    function generateCertificate() {
        console.log("Generating certificate.....")
    }
    
//  Exercises 1 (Write your first logical operator)
    
    console.log("")
    console.log("Exercise 1")
    
    let hasSolvedChallenge = false
    let hasHintLeft = false
    
    //  Create an if statement that checks that both variables are false.
    //  If so, run the showSolution() function
    
    if(hasSolvedChallenge === false && hasHintLeft === false) {
        showSolution()
    }
    
    function showSolution() {
        console.log("Showing the solution....")
    }
    
// Logical OR operator
    console.log("")
    console.log("Logical OR operator")

    //Create two boolean variables, likesDocumentaries and likesStartups
    //Use an OR statement (||) to call recommendMovie() if either of those variables are true 

    let likesDocumentaries = true
    let likesStartups = false

    if(likesDocumentaries === true || likesStartups === true) {
        recommendMovie()
    }

    function recommendMovie() {
        console.log("Hey, check out this new film we think you will like!")
    }

