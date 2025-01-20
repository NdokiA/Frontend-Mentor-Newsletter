const emailInput = document.querySelector('.email-input')
const errorMsg = document.querySelector('.error-msg')
const form = document.getElementById('email-form')


/*eventListener for errorMsg */
emailInput.addEventListener('focus', () => {
    errorMsg.style.display = 'none';
});

emailInput.addEventListener('blur', () => {
    if (emailInput.validity.valid) {
        errorMsg.style.display = 'none'
    } else{
        errorMsg.style.display = 'block'
    }
})

/*eventListener to retrieve form */
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const email = emailInput.value;
    
    //Store the email in session storage
    sessionStorage.setItem('userEmail', email)

    //Redirect to success page 
    window.location.href = 'success-login/success.html'
})