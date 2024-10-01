
// Navnar 

const menuBar = document.querySelector('.bars')

const menuNav = document.querySelector('.nav')

const imgBar = document.querySelector('.bar-img')

let navLink = document.querySelectorAll('.nav-links li a')

// Show NavMenu when click
menuBar.addEventListener('click', () => {
    menuNav.classList.toggle('nav-active')
    // imgBar.src = './assets/images/icon/close.svg'
})

// Closing NavMenu when each link got clicked
navLink.forEach((link) => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('nav-active')
    })
})

// ScrollReveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
})

sr.reveal(`.hero-banner`)
sr.reveal(`.app-info`, {delay: 500})
sr.reveal(`.app-download`, {delay: 500})
sr.reveal(`.card-box`, {delay: 500})