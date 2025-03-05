// Get value
function getValue(id) {
    const number = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = "";
    return number;
}
// Get Balance
function getBalance(id) {
    const balance = parseFloat(document.getElementById(id).innerText)
    return balance;
}
// Hide form
function hideForm(id) {
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("get-bonus-form").classList.add("hidden")

    document.getElementById(id).classList.remove("hidden")
}