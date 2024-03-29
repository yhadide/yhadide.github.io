const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

let slideIndex = 1; // Start with the first image
showSlides();

function showSlides() {
  let img = document.getElementById("slideshowImage");
  img.src = `./assets/png/${slideIndex}.png`; // Set the image source
  slideIndex++; // Move to the next image
  if (slideIndex > 4) {
    slideIndex = 1; // Reset index when it reaches the end
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



let slideIndexpj2 = 5; // Start with the first image
showSlidespj2();
function showSlidespj2() {
  let img = document.getElementById("slideshowImagePj2");
  img.src = `./assets/png/${slideIndexpj2}.png`; // Set the image source
  slideIndexpj2++; // Move to the next image
  if (slideIndexpj2 > 8) {
    slideIndexpj2 = 5; // Reset index when it reaches the end
  }
  setTimeout(showSlidespj2, 2000); // Change image every 2 seconds
}