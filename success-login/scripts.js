const email = sessionStorage.getItem('userEmail')
const emailSpan = document.querySelector('.content-text span')
emailSpan.textContent = email 