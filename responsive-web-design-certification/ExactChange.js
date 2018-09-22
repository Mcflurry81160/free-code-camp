function checkCashRegister(price, cash, cid) {
    var currencyDollarValues = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["HUNDRED", 100]];
    var change = [];
    var cashInDrawer = calculateTotalCashInDrawer(cid);
    var changeDue = cash - price;

    //If cash in drawer < change due, return 'Insufficient Funds'
    if (cashInDrawer < changeDue)
        return "Insufficient Funds";
    if (cashInDrawer == changeDue)
        return "Closed";
    else {
        //Calculate the change
        //Assign dollar values to each cid array eg. "QUARTER", 0.25 etc. - DONE
        //Get the cid arrays that are equal or below the change due 
        //eg. If changedue = $0.50, get cid arrays for QUARTER and below.
        //Depending on how much is available in each currency, add currency to change array to match the change due.

        var currenciesApplicable = getCurrenciesApplicable(changeDue, currencyDollarValues);
        //do the applicable currencies have enough cash to pay the changeDue
        var totalCurrenciesApplicable = calculateTotalCashInDrawer(currenciesApplicable);
        change = getChange(changeDue, currenciesApplicable, cid);
        return change;

    }
}

function getChange(changeDue, currenciesApplicable, currenciesInDrawer) {
    var shouldContinueChecking = true;
    var hasEnoughCashInDrawer = false;
    var change = [];
    var rem = 0;
    //Get the available cash amounts for the applicable currencies
    currenciesApplicable.forEach(function (elApp) {
        currenciesInDrawer.forEach(function (alDrw) {
            if (elApp[0] === alDrw[0]) {
                elApp[2] = alDrw[1];
            }
        });
    });

    //Now the currenciesApplicable item format is [currencyType, dollarIndex, cashInDrawer]
    //sort descending by the dollarValue
    currenciesApplicable.sort(function (a, b) {
        return b[1] - a[1];
    });



    rem = changeDue;
    hasEnoughCashInDrawer = hasEnoughApplicableCashInDrawer(changeDue, currenciesApplicable);

    if (hasEnoughCashInDrawer) {

        //Get the currencies of which the values match the changeDue
        for (var i = 0; i < currenciesApplicable.length; i++) {

            if (shouldContinueChecking) {
                var currencyType = currenciesApplicable[i][0];
                var currencyDollarValue = currenciesApplicable[i][1];
                var currencyAmount = currenciesApplicable[i][2];

                //do we have any currency to cover some part of the changeDue
                if (currencyAmount > 0) {
                    //how many coins/notes of the currency can we use to cover part of the changeDue

                    var numberOfCoinsNotesFromCurrency = Math.floor((rem / currencyDollarValue).toFixed(2));
                    //amount that can be covered from this currency
                    var amountToBeCoveredFromCurrency = numberOfCoinsNotesFromCurrency * currencyDollarValue;
                    // if (numberOfCoinsNotesFromCurrency > 0)
                    var applicableCurrencyAmount = amountToBeCoveredFromCurrency >= currencyAmount ? currencyAmount : amountToBeCoveredFromCurrency;
                    //add the change to the change array
                    if (applicableCurrencyAmount != 0)
                        change.push([currencyType, applicableCurrencyAmount]);

                    //is there anything remaining after covering the changeDue from that currency
                    rem -= applicableCurrencyAmount;
                    // var rem = rem % currencyDollarValue; 
                    //if the amount has been covered, stop the search
                    if (rem == 0)
                        shouldContinueChecking = false;
                }
            }
        }

        return change;

    }
    else 
        return "Insufficient Funds";
}

function hasEnoughApplicableCashInDrawer(changeDue, currencies) {
    var total = 0;
    currencies.forEach(function (el) {
        total += el[2];
    });
    return total >= changeDue;
}

function getCurrenciesApplicable(changeDue, currencyArray) {
    var applicableCurrencies = currencyArray.filter(function (el) {
        return el[1] <= changeDue && el[1] > 0;
    });

    return applicableCurrencies;
}

function calculateTotalCashInDrawer(currencies) {
    var total = 0;
    currencies.forEach(function (currency) {
        total += currency[1];
    });
    return total;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


