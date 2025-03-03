const phoneNumber = document.getElementById('login-phone-number')
const pinNumber = document.getElementById('login-pin-number')
document.getElementById('login-button').addEventListener('click', function () {
    const phoneDigit = phoneNumber.value;
    const pinDigit = pinNumber.value;
    console.log(phoneDigit, pinDigit)
    if (phoneDigit === "1357" && pinDigit === "1234") {
        window.location.href = "home.html"
    }
    else {
        alert('Wrong Information')
    }
})