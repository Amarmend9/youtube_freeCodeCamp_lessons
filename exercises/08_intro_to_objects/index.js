console.log("Intro to Object")
//  Objects - store data in-depth - composite / complex data type
//  key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


console.log(course.tags)

//Exercise 1 (Create my first object)
console.log("")
console.log("Create my first object")
    //  Create an object that represents an airbnb castle listing.
    //  It should contain at least one boolean, one string, one number, and one array
    //  Log out at least two of the keys using the dot notation

    let castle = {
        name: "Private room-in Galway",
        title: "Live like a king in my Castle",
        price: 190,
        isSuperHost: true,
        images: ["img/castle1.png", "img/castle2.png"],
        guest: 4,
        bedroom: 1,
        beds: 2,
        private: "half-bath",
        rate: 4.95,
        review: 1268,
        day: ["day", "night"],
        favorite: false
    } 

    console.log(castle.isSuperHost)
    console.log(castle.images)