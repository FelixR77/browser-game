/*-------------------------------- Constants --------------------------------*/





/*-------------------------------- Variables --------------------------------*/





/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.grid-square');
const start = document.querySelector('#start') 
let current = start



/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('keydown', (event) => {
  switch(event.key) {
    case "ArrowDown":
        
        console.log("moving up")
  }
   console.log(event.key)
})
 


/*-------------------------------- Functions --------------------------------*/
buttons.forEach((gridSquare, index) => {
    gridSquare.setAttribute(`data-expo`, `${index + 1}`);
    console.log(gridSquare)
})