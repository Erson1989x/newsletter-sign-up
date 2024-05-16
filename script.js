const newsLetterForm = document.querySelector('.newsletter-form');
const successCard = document.querySelector('.success-card');
const mainContainer = document.querySelector('.main-container');
const subscribeButton = document.querySelector('.subscribe-button');
const dismissButton = document.querySelector('.dismiss-button');

newsLetterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Toggle the 'show-hidden' class on the success card and main container
    successCard.style.display = 'block';
    mainContainer.style.display = 'none';
});

dismissButton.addEventListener('click', () => {
    successCard.style.display = 'none';
    
    if (window.innerWidth > 400) {
        mainContainer.style.display = 'flex';
    } else  {
        mainContainer.style.display = 'block';
    } 
});

const updateDisplayProperties =() => {
    if (window.innerWidth > 400) {
        mainContainer.style.display = 'flex';
    } else {
        mainContainer.style.display = 'block';
    }
}
updateDisplayProperties();

window.addEventListener('resize', updateDisplayProperties);