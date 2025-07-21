function calculateTax() {
    var price_val = document.taxForm.price.value;
    var tax_rate_val = document.taxForm.taxRate.value;
    
    if (price_val == "" || tax_rate_val == "") {
        alert("Please enter both the price and the tax rate.");
        return;
    }

    var price = parseFloat(price_val);
    var taxRate = parseFloat(tax_rate_val);

    if (taxRate < 0) {
        alert("Please enter a tax rate of 0 or higher.");
        return;
    }

    var taxAmount = price * (taxRate / 100);
    var totalPrice = price + taxAmount;
    

    document.taxForm.resultArea.value = "Tax (" + taxRate + "%): " + taxAmount.toFixed(0) + " JPY" +
                                        "\nTotal Price (incl. tax): " + totalPrice.toFixed(0) + " JPY";
}

function resetCalculator() {
    document.taxForm.price.value = "";
    document.taxForm.taxRate.value = "";
    document.taxForm.resultArea.value = "";
}


function validateContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == "" || email == "" || message == "") {
        alert("Name, Email, and Message must be filled out.");
    } else {
        alert("Thank you for your message!");
        clearContactForm();
    }
}

function clearContactForm() {
    document.getElementById('contact-form').reset();
}

