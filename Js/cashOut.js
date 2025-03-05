//cash out card
document.getElementById("cash-out").addEventListener('click', function () {
    hideForm("cash-out-form")
})

// cash out button
document.getElementById('cash-out-button').addEventListener('click', function () {
    let accountNumber = getValue("cash-out-account-number")
    let pinNumber = getValue("cash-out-pin-number")
    let amount = getValue("cash-out-amount");
    const balance = getBalance("balance")
    if (accountNumber === 1234 && pinNumber === 1234 && isNaN(amount) === false && balance >= amount) {
        const newBalance = balance - amount;
        document.getElementById("balance").innerText = newBalance;
    }
    else {
        return alert("Give the valid Account Number or Pin or give valid amount")
    }

})