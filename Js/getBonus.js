// get bonus card
document.getElementById("get-bonus").addEventListener('click', function () {
    hideForm("get-bonus-form")
})

document.getElementById("get-bonus-button").addEventListener('click', function () {
    const couponCode = document.getElementById("coupon-code").value;
    document.getElementById("coupon-code").value = "";
    if (couponCode === "sohan123") {
        const balance = getBalance("balance");
        const bonus = balance * 0.02;
        const newBalance = balance + bonus;
        document.getElementById("balance").innerText = newBalance;
        return alert(`You have got ${bonus} tk bonus`)
    }
    else {
        return alert("Give valid coupon code")
    }
})