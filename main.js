const investedAmountInput = document.querySelector(".invested-amount");
const gainRateInput = document.querySelector(".gain-rate");
const investmentPeriodInput = document.querySelector(".investment-period");

const investedAmountValue = document.querySelector(".inv-amount .value");
const estimatedReturnsValue = document.querySelector(".est-returns .value");
const totalAmountValue  = document.querySelector(".total-value .value");

const calculateBtn = document.querySelector(".calculate-btn");
 

let investedAmount = parseFloat(investedAmountInput.value);
let gainRate = parseFloat(gainRateInput.value);
let investmentPeriod = parseFloat(investmentPeriodInput.value);


let days = investmentPeriod * 25;




const calculateReturns = () => {
    let returns = investedAmount * (Math.pow((1 + gainRate / 100), days));
    return returns;
};

const updateData = (returns) => {
    investedAmountValue.innerHTML = Math.round(investedAmount);
    estimatedReturnsValue.innerHTML = Math.round(returns);
    let totalAmount = Math.round(investedAmount + returns);
    totalAmountValue.innerHTML = totalAmount;

    displayChart(totalAmountValue, investedAmountValue);

};


const displayChart = (totalAmountValue) => {
  const ctx = document.getElementById('myChart').getContext("2d");
  console.log(investedAmountValue);
    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: ["Total returns", "Invested Amount"],
        datasets: [{
        data: [investedAmountValue],
        backgroundColor: ["#B5D43B", "#D9EF82"],
        borderWidth: 0
        }]
      },
      
    });
  };
  
  

const refreshInputValues = () => {
    investedAmount = parseFloat(investedAmountInput.value);
    gainRate = parseFloat(gainRateInput.value);
    investmentPeriod = parseFloat(investmentPeriodInput.value);


    days = investmentPeriod * 25;

}


const init = () => {
    refreshInputValues();
    let returns = calculateReturns();
    updateData(returns);
};

init();





calculateBtn.addEventListener("click", init);