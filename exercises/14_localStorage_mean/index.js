//  HINTS:
//  localStorage.setItem(key, value)
//  localStorage.getItem(key)
//  localStorage.clear()
//  PS: both key and value need to be strings

//  1. Save a key-value pair in localStorage
    localStorage.setItem("myLead", "listItems")
//  2. Refresh the page. Get the value and log it to the console
    console.log(localStorage.getItem("myLead"))
    localStorage.clear("myLead")
//  3. Clear localStorage
    console.log(localStorage.getItem("myLead"))