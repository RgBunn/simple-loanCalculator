const loanAmountEl = document.querySelector("#loan-amount");
const interestRateEl = document.querySelector("#interest-rate");
const monthsEl = document.querySelector("#months");
const monthlyPay = document.querySelector("#monthly-pay");
const inputEl = document.querySelectorAll("input");

inputEl.forEach((inp) => {
  inp.addEventListener("change", function () {
    calcAmount();
  });
});

function calcAmount() {
  const interest =
    (loanAmountEl.value * (interestRateEl.value * 0.01)) / monthsEl.value;
  const monthlyPayment = loanAmountEl.value / monthsEl.value + interest;
  monthlyPay.textContent = `${monthlyPayment.toFixed(2)}$`;
}
