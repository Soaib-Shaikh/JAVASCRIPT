let investment = document.getElementById("investment");
let invest_range = document.getElementById("invest_range");
let rate = document.getElementById("rate");
let rate_range = document.getElementById("rate_range");
let time = document.getElementById("time");
let time_range = document.getElementById("time_range");
let invest_amount = document.getElementById("invest_amount");
let est_return = document.getElementById("est_return");
let total_interest = document.getElementById("total_interest");

// IIFE
(()=>{
    invest_range.value = investment.value;
    rate_range.value = rate.value;
    time_range.value = time.value;

})();

const handleChange = () => {
    investment.value = invest_range.value;
    rate.value = rate_range.value;
    time.value = time_range.value;
    calculate();
    if (investment.value == "0" || rate.value == "0" || time.value == "0") {
        confirm("Please enter a valid amount");
        investment.value = 500;
        rate.value = 12;
        time.value = 5;
    }
   
}

function calculate() {
    let p = parseFloat(investment.value);
    let r = parseFloat(rate.value) / 100 / 12;
    let n = parseFloat(time.value) * 12;

    if(isNaN(p) || isNaN(r) || isNaN(n)) return;
    let invested = p * n;
    let future_value = p * ((Math.pow((1 + r), n) - 1) / r) * (1 + r);
    let returns = future_value - invested;

    invest_amount.innerHTML = `₹ ${invested.toLocaleString(`en-IN`)}`;
    est_return.innerHTML = `₹ ${returns.toLocaleString(`en-IN`)}`;
    total_interest.innerHTML = `₹ ${(future_value).toLocaleString(`en-IN`)}`;

}
