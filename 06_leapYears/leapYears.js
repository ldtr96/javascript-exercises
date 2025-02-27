const leapYears = function(year) {
    const divFour = year % 4 == 0;
    const divHundred = year % 100 ==0;
    const divFourHundred = year % 400 ==0;
    let outcome = ""

        if (divHundred && divFourHundred){
            outcome = true
        } else if (divFour && !divHundred){
            outcome = true
        } else outcome = false
    return outcome;
};

// Do not edit below this line
module.exports = leapYears;
