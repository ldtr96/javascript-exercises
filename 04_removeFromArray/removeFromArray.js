const removeFromArray = function(arrs, ...specifys) {
    return arrs.filter((element,index,array)=> {
        return specifys.every(specify => element !== specify)
        }
    )
};

// Do not edit below this line
module.exports = removeFromArray;
