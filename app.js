/*-------------------------------- Constants --------------------------------*/





/*-------------------------------- Variables --------------------------------*/





/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.grid-square');
const start = document.querySelector('#start')
let current = start

buttons.forEach((gridSquare, index) => {
    gridSquare.setAttribute(`data-expo`, `${index + 1}`);
    // console.log(gridSquare)
})

const expo21 = document.querySelector('[data-expo="21"]')
const expo22 = document.querySelector('[data-expo="22"]')
const expo18 = document.querySelector('[data-expo="18"]')
const expo13 = document.querySelector('[data-expo="13"]')
const expo8 = document.querySelector('[data-expo="8"]')
const expo3 = document.querySelector('[data-expo="3"]')
const expo4 = document.querySelector('[data-expo="4"]')
const expo5 = document.querySelector('[data-expo="5"]')
const expo26 = document.querySelector('[data-expo="26"]')
const expo23 = document.querySelector('[data-expo="23"]')




/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('keydown', (event) => {
    if (expo26.innerHTML === '😎') {
        if (event.key === "ArrowUp") {
            expo21.innerHTML = '😎'
            expo26.innerHTML = ''
        }
    }

    if (expo21.innerHTML === '😎') {
        if (event.key === "ArrowRight") {
            expo22.innerHTML = '😎'
            expo21.innerHTML = ''
        }
    }
    if (expo22.innerHTML === '😎') {
        if (event.key === "ArrowRight") {
            expo23.innerHTML = '😎'
            expo22.innerHTML = ''
        }
    }
    if (expo23.innerHTML === '😎') {
        if (event.key === "ArrowUp") {
            expo3.innerHTML = '😎'
            expo18.innerHTML = ''
            expo13.innerHTML = ''
            expo8.innerHTML = ''
            expo23.innerHTML = ''
        }
    }
    if (expo3.innerHTML === '😎') {
        if (event.key === "ArrowRight") {
            expo5.innerHTML = '😎'
            expo3.innerHTML = ''
            expo4.innerHTML = ''
        }
    }
})



// /*-------------------------------- Functions --------------------------------*/
