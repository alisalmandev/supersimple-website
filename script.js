document.getElementById("addButton").addEventListener("click", function() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (description && !isNaN(amount)) {
        const transactionList = document.getElementById("transactionList");
        const listItem = document.createElement("li");
        listItem.textContent = `${description}: ${amount} ريال`;
        transactionList.appendChild(listItem);
        
        // تحديث الإجمالي
        updateTotal(amount);
        
        // مسح الحقول بعد الإضافة
        document.getElementById("description").value = '';
        document.getElementById("amount").value = '';
    } else {
        alert("يرجى إدخال وصف صحيح ومبلغ صحيح.");
    }
});

let total = 0;

function updateTotal(amount) {
    total += amount;
    document.getElementById("totalAmount").textContent = `الإجمالي: ${total} ريال`;
}