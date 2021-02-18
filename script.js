// Connects the button 'answer' to the function 'buttonOne'
document.getElementById('answer').addEventListener('click', buttonOne)

// Creates a variable named number and sets it to 0
let number = 0

function buttonOne () {
  // Gets the number that the user inputs and stores it inside the variable 'number'. Defines the variable 'number' as an integer.
  number = document.getElementById('integer').value
  number = parseInt(number)

  // checks if 'number' is less than 0
  if (number < 0) {
    document.getElementById('text').innerHTML = 'This number is negative'
  } else {
    document.getElementById('text').innerHTML = 'This number is positive'
  }
}
