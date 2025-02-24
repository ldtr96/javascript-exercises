const sumAll = function(begin,end) {
    if ((begin > 0 && end > 0) && (Number.isInteger(begin) && Number.isInteger(end))){

    if (begin < end ){
    const counterArrs = []
    let sum = 0
    for (let i = begin;i<= end;i++){
        counterStart = i;
        
        counterArrs.push(counterStart)
    }

    
    for (let t = 0; t < counterArrs.length; t++){
        sum += counterArrs[t]
    }

    return sum;
    } else if (begin > end){
        const counterArrs = []
        let sum = 0
        for (let i = end;i<= begin;i++){
            counterStart = i;
            
            counterArrs.push(counterStart)
        }
    
        
        for (let t = 0; t < counterArrs.length; t++){
            sum += counterArrs[t]
        }
    
        return sum;
    }
} else {
    return 'ERROR'
};

}

// Do not edit below this line
module.exports = sumAll;
