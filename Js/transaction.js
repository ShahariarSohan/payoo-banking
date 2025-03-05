// transaction card
document.getElementById("transaction").addEventListener('click', function () {
    hideForm("transaction-container")
    const transaction = document.createElement('div')
    transaction.innerHTML = `
    <div">
        <div class="divider"></div>
        <h1 class="font-bold">Add amount :</h1>
        <div class="divider"></div>
        <h1 class="font-bold">Cash out :</h1>
    </div>
    `
    document.getElementById("transaction-history").appendChild(transaction)

})
// delete button
