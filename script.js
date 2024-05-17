const newsLetterForm = document.querySelector('.newsletter-form');
const successCard = document.querySelector('.success-card');
const mainContainer = document.querySelector('.main-container');
const subscribeButton = document.querySelector('.subscribe-button');
const dismissButton = document.querySelector('.dismiss-button');

newsLetterForm.addEventListener('submit', (event) => {
    event.preventDefault();
     
        // Get the email input element and its value
        const emailInput = document.querySelector('#email');
        const emailValue = emailInput.value;

        const errorMessage = document.querySelector('.error-message');
    
        // Validate the email
        if (validateEmail(emailValue)) {
            // If the email is valid, show the success card and hide the main container
            successCard.style.display = 'block';
            mainContainer.style.display = 'none';
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
            emailInput.classList.remove('invalid-input');

        } else {
            emailInput.classList.add('invalid-input'); 
            // Optionally, show an error message element, if it exists
            const errorMessage = document.querySelector('.error-message');
            if (errorMessage) {
    
                errorMessage.style.display = 'flex';
                errorMessage.textContent = 'Valid email required';
            }
        }
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

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

window.addEventListener('resize', updateDisplayProperties);