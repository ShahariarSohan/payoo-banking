function getValue(id) {
    const amount = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = "";
    return amount;
}
function getBalance(id) {
    const balance = parseFloat(document.getElementById(id).innerText)
    return balance;
}