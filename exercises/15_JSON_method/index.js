let myLeads = []
//  1. Turn the myLeads string into an array
     myLeads = JSON.parse(myLeads)
//  2. Push a new value to array
     myLeads.push("www.hellodude.com")
//  3. Turn the array into a string again
     myLeads = JSON.stringify(myLeads)
//  4.Console.log the string using typeof to verify that it's a string 
     console.log(typeof myLeads)