 💸 Loan Calculator

A simple and elegant web-based loan calculator that helps users estimate their monthly payment, total payment, and total interest over the lifetime of a loan. Built using HTML, CSS, and JavaScript.

🚀 Features

- 📥 Input fields for loan amount, interest rate, and term duration.
- 🔄 Real-time calculation of:
  - Monthly Payment
  - Total Payment
  - Total Interest
- 🎨 Clean and responsive user interface with modern styling.
- 🧼 Reset button to clear inputs and results instantly.

Languages Used

- **HTML5** for markup
- **CSS3** for styling 
- **JavaScript** for dynamic calculations and interactivity

## 📷 Demo

![image](https://github.com/user-attachments/assets/524ccfdc-9b11-42ba-933e-2aea3b125c89)


## 📂 File Structure

```

📁 Loan-Calculator/
├── index.html       # Main UI structure
├── style.css        # Responsive and aesthetic styling
└── script.js        # Core logic and event handling

```

## 🧮 Calculation Formula

Monthly Payment is calculated using the formula:

```

M = P \* r \* (1 + r)^n / ((1 + r)^n - 1)

````

Where:
- `P` is the loan amount
- `r` is the monthly interest rate (annual rate / 12 / 100)
- `n` is the total number of monthly payments (`loanTerm * 12`)

## 📖 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/loan-calculator.git
````

2. Open `index.html` in your browser.
3. Enter your loan details.
4. View the calculated results instantly.

## 📱 Responsive Design

This project is fully responsive and works across all device sizes — from desktops to mobile phones.

## ✅ To-Do (Optional Enhancements)

* Export results to PDF
* Add currency selection
* Theme customization

---

Made with ❤️ by Praveen

```
