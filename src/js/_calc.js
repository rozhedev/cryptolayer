// Buttons and inputs

const investCurrencyBtns = document.querySelectorAll('.calc__step-currency'),
    investAmount = document.querySelector('#invest-amount'),
    periodMining = document.querySelector('#period-mining'),
    withdrawCurrencyBtns = document.querySelectorAll('.calc__step-currency2');

//  Output blocks

const miningPrice = document.querySelector('#mining-price'),
    hashrate = document.querySelector('#hashrate'),
    profit = document.querySelector('#profit'),
    dailyIncome = document.querySelector('#daily-income'),
    minAmount = document.querySelector('#min-amount'),
    minPeriodMining = document.querySelector('#min-period-mining');

let replenishRate, withdrawRate;


// * FUNCTIONS
// Выбор нужной валюты

function chooseCurrency(item, currencyBtns) {
    for (let item of currencyBtns) {
        item.classList.remove('_active');
    }
    item.classList.add('_active');
}

//  Проверка лимитов

function checkLimits() {
    for (let replenishCur of investCurrencyBtns) {
        if (replenishCur.classList.contains('_active')) {
            if (replenishCur.classList.contains('calc__step-currency--orange')) {
                minAmount.innerHTML = `<span>* </span>min 0.0035 BTC`;
            }
            if (replenishCur.classList.contains('calc__step-currency--violet')) {
                minAmount.innerHTML = `<span>* </span>min 0.04 ETH`;
            }
            if (replenishCur.classList.contains('calc__step-currency--blue')) {
                minAmount.innerHTML = `<span>* </span>min 0.5 LTC`;
            }
            if (replenishCur.classList.contains('calc__step-currency--green')) {
                minAmount.innerHTML = `<span>* </span>min 0.5 DASH`;
            }
            if (replenishCur.classList.contains('calc__step-currency--bgcolor')) {
                minAmount.innerHTML = `<span>* </span>min 100 USD`;
            }
        }
    }
}

function priceFor1() {
    for (let i = 0; i < investCurrencyBtns.length; i++) {
        if ((i == 0 || i == 3) && investCurrencyBtns[i].classList.contains('_active')) {
            miningPrice.textContent = '1.707 $';
        } else if (i == 1 && investCurrencyBtns[i].classList.contains('_active')) {
            miningPrice.textContent = '0.328 $';
        } else if ((i == 2 || i == 4) && investCurrencyBtns[i].classList.contains('_active')) {
            miningPrice.textContent = '0.127 $';

        }
    }
}

// Calculating Mining price

function calcMiningPrice() {
    let hashrateValue;
    let investAmountVal = +investAmount.value;

    for (let replCur of investCurrencyBtns) {
        if (replCur.classList.contains('_active') && investAmount.value != '') {
            let replRate = +replCur.dataset.currency;

            if (replCur.classList.contains('calc__step-currency--orange')) {
                hashrateValue = Math.round((replRate * investAmountVal) / 1.707);
                hashrate.textContent = `${hashrateValue} MH/s`;
            }
            if (replCur.classList.contains('calc__step-currency--violet')) {
                hashrateValue = Math.round((replRate * investAmountVal) / 0.328);
                hashrate.textContent = `${hashrateValue} MH/s`;
            }
            if (replCur.classList.contains('calc__step-currency--blue')) {
                hashrateValue = Math.round((replRate * investAmountVal) / 0.127);
                hashrate.textContent = `${hashrateValue} MH/s`;
            }
            if (replCur.classList.contains('calc__step-currency--green')) {
                hashrateValue = Math.round((replRate * investAmountVal) / 1.707);
                hashrate.textContent = `${hashrateValue} MH/s`;
            }
            if (replCur.classList.contains('calc__step-currency--bgcolor')) {
                hashrateValue = Math.round(investAmountVal / 0.127);
                hashrate.textContent = `${hashrateValue} MH/s`;
            }
        }
    }
}

function calcProfit() {
    for (let replenishCur of investCurrencyBtns) {
        if (replenishCur.classList.contains('_active')) {
            for (let withdrawCur of withdrawCurrencyBtns) {
                if (withdrawCur.classList.contains('_active')) {

                    replenishRate = +replenishCur.dataset.currency;
                    withdrawRate = +withdrawCur.dataset.currency;

                    let resultCalc, resultIncome;
                    let investAmountVal = +investAmount.value,
                        periodMiningVal = +periodMining.value;

                    resultIncome = (investAmountVal * replenishRate / withdrawRate) * 0.004;
                    resultCalc = resultIncome * periodMiningVal;

                    if (withdrawCur.classList.contains('calc__step-currency--orange') || withdrawCur.classList.contains('calc__step-currency--violet') || withdrawCur.classList.contains('calc__step-currency--blue') || withdrawCur.classList.contains('calc__step-currency--green')) {
                        resultCalc = resultCalc.toFixed(6);
                        resultIncome = resultIncome.toFixed(6);
                    }
                    if (withdrawCur.classList.contains('calc__step-currency--orange')) {
                        profit.textContent = `${resultCalc} BTC`;
                        dailyIncome.textContent = `${resultIncome} BTC`;
                    }
                    if (withdrawCur.classList.contains('calc__step-currency--violet')) {
                        profit.textContent = `${resultCalc} ETH`;
                        dailyIncome.textContent = `${resultIncome} ETH`;
                    }
                    if (withdrawCur.classList.contains('calc__step-currency--blue')) {
                        profit.textContent = `${resultCalc} LTC`;
                        dailyIncome.textContent = `${resultIncome} LTC`;
                    }
                    if (withdrawCur.classList.contains('calc__step-currency--green')) {
                        profit.textContent = `${resultCalc} DASH`;
                        dailyIncome.textContent = `${resultIncome} DASH`;
                    }
                    if (withdrawCur.classList.contains('calc__step-currency--bgcolor')) {
                        resultCalc = resultCalc.toFixed(2);
                        resultIncome = resultIncome.toFixed(2);

                        profit.textContent = `${resultCalc} $`;
                        dailyIncome.textContent = `${resultIncome} $`;
                    }
                }
            }
        }
    }
}


// * CALL FUNCTIONS

if (investCurrencyBtns.length > 0) {
    for (let replenishCur of investCurrencyBtns) {
        replenishCur.addEventListener('click', function () {
            chooseCurrency(replenishCur, investCurrencyBtns);
            checkLimits();
            calcMiningPrice();
            priceFor1();
            calcProfit();
        })
    }
}

if (withdrawCurrencyBtns.length > 0) {
    for (let withdrawCur of withdrawCurrencyBtns) {
        withdrawCur.addEventListener('click', function () {
            chooseCurrency(withdrawCur, withdrawCurrencyBtns);
            calcProfit();
        })
    }
}

if (investAmount) {
    investAmount.addEventListener('input', function () {
        calcMiningPrice();
        calcProfit();
    })
}

if (periodMining) {
    periodMining.addEventListener('input', function () {
        checkLimits();
        calcProfit();
    }) 
}