//let count = 0;
//console.log(count)

//let myAge = 25;
//console.log(myAge)

//function increment() {
    //console.log("The button was clicked")
//}
let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")
let count=0
function increment() {
    count=count+1
    countEl.textContent=count
    //console.log(count)
}

//DOM-Document Object Model-aka how to use javascript to modify a website

//creating a save function which saves the count value
function save() {
    let countStr= count + " - "
    saveEl.textContent += countStr//textContent is used to add text without affecting the HTML
    countEl.textContent=0//resets the count value to 0 after saving
}  
// let wish= "I\'d love to see the show \"The loin king\" "---op--I'd love to see the show "The loin king"
