function calculateMonthlyPayment(P, annualRate, years) {
    const r = annualRate / 12 / 100;
    const n = years * 12;

    if (r === 0) return P / n;

    const numerator = P * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    return numerator / denominator;
}

function updateDisplay() {
    const P = parseFloat(document.getElementById("loanAmount").value);
    const rate = parseFloat(document.getElementById("interestRate").value);
    const years = parseFloat(document.getElementById("loanTerm").value);

    if (isNaN(P) || isNaN(rate) || isNaN(years) || P <= 0 || rate < 0 || years <= 0) {
        document.getElementById("monthlyPayment").textContent = "₹0.00";
        document.getElementById("totalPayment").textContent = "₹0.00";
        document.getElementById("totalInterest").textContent = "₹0.00";
        return;
    }

    const monthly = calculateMonthlyPayment(P, rate, years);
    const totalPay = monthly * years * 12;
    const totalInterest = totalPay - P;

    document.getElementById("monthlyPayment").textContent = "₹" + monthly.toFixed(2);
    document.getElementById("totalPayment").textContent = "₹" + totalPay.toFixed(2);
    document.getElementById("totalInterest").textContent = "₹" + totalInterest.toFixed(2);
}

function resetFields() {
    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";
    updateDisplay();
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateDisplay);
});

document.getElementById("resetBtn").addEventListener("click", resetFields);