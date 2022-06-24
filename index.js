// PSEUDOCODE (instructions)
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

const countEl = document.getElementById('count-el') // declaring a CamelCase variable to grap (and store; using the assignment operator) the 'count-el' HTML element
const saveEl = document.getElementById('save-el')
// console.log(saveEl); // checking the DOM works (interacting with the HTML document and getting a representation of the HTML element passed in the argument in the method)

// intialize the count as 0
let count = 0

const incrementBtn = document.getElementById('increment-btn');
// declaring a function to be called when the 'increment-btn' button is clicked. A function is executed only if it's called (in this case it is called by the addEventListener method)
incrementBtn.addEventListener('click', function increment() {
    // console.log("The button was clicked") // checking the function is called when the button is clicked
    count++ // increment variable by 1; it can also be count += 1 or count = count + 1
    // console.log(count); // testing out the count
    countEl.textContent = count // modifying and rendering the 'count-el' HTML element content on to the page
})

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function save(){
    // console.log(count)  
    const countStr = `${count} - ` // storing the count as a string
    saveEl.textContent += countStr // contatinating the 'countStr' strings generated everytime the button is clicked and rendering it on the 'save-el' HTML element content on to the page 
    countEl.textContent = 0 // render count-el HTML element to 0 on page when the 'save' button is clicked
    count = 0 // set 'count' variable to 0
})


