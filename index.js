// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count
// Create a function, save(), wich logs out the count when its called
// Grab the save-el paragrah and store it in a variable called saveEl
// Create a variable that contains both the count and the dash separator, i.e. "12 - "
// Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;



function increment() {
    count += 1;
    countEl.textContent = count;
    
};

function save() {
    let countPlusDash = count + " - ";
    saveEl.textContent += countPlusDash;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
};
