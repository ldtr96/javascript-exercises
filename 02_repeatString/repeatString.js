const repeatString = function(str,n) {
    let repstring = "";
    if(n < 0){
    repstring = "ERROR";
    return repstring;
    } else {
    for (let i = 0; i < n; i++){
        repstring += str
    }
    return repstring;
    }
};

// Do not edit below this line
module.exports = repeatString;
