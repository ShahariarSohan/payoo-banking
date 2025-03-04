document.getElementById('add-money-button').addEventListener('click', function () {
    let accountNumber = getValue("account-number")
    let pinNumber = getValue("pin-number")
    let amount = getValue("amount");
    if (accountNumber === 1234 && pinNumber === 1234) {
        const balance = getBalance("balance")
        const newBalance = balance + amount;
        document.getElementById("balance").innerText = newBalance;
    }
    else {
        return alert("Give the valid Account Number or Pin or give valid amount")
    }

})