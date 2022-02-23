/*
Todo looping 4 season videos for background based on weather API
Beautify app frontend
Make custom input and a countdown timer for it
Make standardized Holiday countdown timer based on button clicks.
Make birthday background changer based on Countdown
*/


const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
