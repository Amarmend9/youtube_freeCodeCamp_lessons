//  template strings/literals

const recipient = "James"

//  Create a new variable, sender, and set its value to your name
const sender = "Amarmend"


//  Refactor the email string to use template strings

// const email = "Hey "  + recipient + "! How is it going? Cheers Amaraa"
//  Use your sender variable instead of "Amaraa"

const email = `Hey ${recipient} ! How is it going? Cheers ${sender}`

console.log(email)

//  Template strings on multiple lines
    const multipleEmailLines = `
        ${sender}: Hey ${recipient}! 
        ${recipient}: How is it going? Cheers ${sender}
    `

    console.log(multipleEmailLines)