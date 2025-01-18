const emailInput = document.querySelector('.email-input')
const errorMsg = document.querySelector('.error-msg')

emailInput.addEventListener('blur', () => {
    if (emailInput.validity.valid) {
        errorMsg.style.display = 'none'
    } else{
        errorMsg.style.display = 'block'
    }
})