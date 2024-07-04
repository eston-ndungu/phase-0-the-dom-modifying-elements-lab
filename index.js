// Write your code here!

// Selects the first element that matches a CSS selector
document.querySelector('#main').remove()

// Creates a new HTML element
const newHeader = document.createElement('h1')

// Set an attribute of id to the newHeader and assign it a value 
newHeader.setAttribute('id', 'victory');


newHeader.textContent = 'ESTON is the champion'

//Adds the above Element to the DOM
document.head.append(newHeader);






