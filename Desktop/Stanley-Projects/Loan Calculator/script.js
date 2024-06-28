function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    interestRateValue = document.getElementById("interest-rate").value;
    monthsToPayValue = document.getElementById("Months-to-pay").value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    document.getElementById("monthly-payment").innerHTML = `Monthly payment: ${monthlyPayment}`;
    
}