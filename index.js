// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
let turn = "X";
function fillButton(index, text) {
   // This function fills the button of the send index



}

 
 


// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if(confirm(`Horraaay, ${winner} wins!`)){

    
     // The code here will be exectued if you press on OK button that will pop on the window 
     for (let i = 1 ; i < 10; i ++ ){
      document.getElementById(1 + i);

     }
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
fillButton(1, "X");
fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  
fillButton (index,"x");
if (fillButton === (index,X) && (index,"")){
   fillButton = (index,"ْX");
}
else {
   fillButton === (index,"O");
}
}


    


/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
