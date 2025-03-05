// transaction card
document.getElementById("transaction").addEventListener('click', function () {
    hideForm("transaction-container")
    let addMoneyAmount = getValue("add-money-amount");
    let cashOutAmount = getValue("cash-out-amount");
    console.log(addMoneyAmount, cashOutAmount)
    const transaction = document.createElement('div')
    transaction.innerHTML = `
    <h1>
     Amount :${addMoneyAmount}
    </h1>
    `
    document.getElementById("transaction-history").appendChild(transaction)
    // delete button
    document.getElementById("delete-button").addEventListener('click', function () {
        // document.getElementById("transaction-history").remove();
        transaction.remove()
    })
})

